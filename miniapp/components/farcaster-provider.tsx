'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAccount, useConnect } from 'wagmi'

interface FarcasterContext {
  ready: () => void
  disableNativeGestures: (disable: boolean) => void
}

declare global {
  interface Window {
    farcaster?: FarcasterContext
  }
}

interface FarcasterContextType {
  isReady: boolean
  isFarcaster: boolean
  ready: () => void
  disableNativeGestures: (disable: boolean) => void
  walletAddress: string | undefined
  isWalletConnected: boolean
}

const FarcasterContext = createContext<FarcasterContextType>({
  isReady: false,
  isFarcaster: false,
  ready: () => {},
  disableNativeGestures: () => {},
  walletAddress: undefined,
  isWalletConnected: false,
})

export const useFarcasterContext = () => useContext(FarcasterContext)

interface FarcasterProviderProps {
  children: React.ReactNode
}

export function FarcasterProvider({ children }: FarcasterProviderProps) {
  const [isReady, setIsReady] = useState(false)
  const [isFarcaster, setIsFarcaster] = useState(false)
  
  // Wagmi hooks for wallet connection
  const { isConnected, address } = useAccount()
  const { connect, connectors } = useConnect()

  useEffect(() => {
    // Check if we're running in a Farcaster Mini App
    const checkFarcaster = () => {
      if (typeof window !== 'undefined' && window.farcaster) {
        setIsFarcaster(true)
        return true
      }
      return false
    }

    // Call ready when the interface is loaded
    const callReady = () => {
      if (checkFarcaster()) {
        try {
          window.farcaster?.ready()
          setIsReady(true)
          console.log('Farcaster Mini App ready called')
        } catch (error) {
          console.error('Error calling Farcaster ready:', error)
        }
      }
    }

    // Call ready after a short delay to ensure the interface is fully rendered
    const timer = setTimeout(() => {
      callReady()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Auto-connect wallet when in Farcaster
  useEffect(() => {
    if (isFarcaster && !isConnected && connectors.length > 0) {
      // Auto-connect to the first available connector (Farcaster Mini App connector)
      connect({ connector: connectors[0] })
    }
  }, [isFarcaster, isConnected, connectors, connect])

  const ready = () => {
    if (typeof window !== 'undefined' && window.farcaster) {
      try {
        window.farcaster.ready()
        setIsReady(true)
      } catch (error) {
        console.error('Error calling Farcaster ready:', error)
      }
    }
  }

  const disableNativeGestures = (disable: boolean) => {
    if (typeof window !== 'undefined' && window.farcaster) {
      try {
        window.farcaster.disableNativeGestures(disable)
      } catch (error) {
        console.error('Error disabling native gestures:', error)
      }
    }
  }

  const value: FarcasterContextType = {
    isReady,
    isFarcaster,
    ready,
    disableNativeGestures,
    walletAddress: address,
    isWalletConnected: isConnected,
  }

  return (
    <FarcasterContext.Provider value={value}>
      {children}
    </FarcasterContext.Provider>
  )
}
