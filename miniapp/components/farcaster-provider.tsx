'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAccount, useConnect } from 'wagmi'
import { sdk } from '@farcaster/miniapp-sdk'

interface FarcasterContextType {
  isReady: boolean
  isFarcaster: boolean
  ready: (options?: { disableNativeGestures?: boolean }) => Promise<void>
  disableNativeGestures: (disable: boolean) => void
  walletAddress: string | undefined
  isWalletConnected: boolean
}

const FarcasterContext = createContext<FarcasterContextType>({
  isReady: false,
  isFarcaster: false,
  ready: async () => {},
  disableNativeGestures: () => {},
  walletAddress: undefined,
  isWalletConnected: false,
})

export const useFarcasterContext = () => useContext(FarcasterContext)

interface FarcasterProviderProps {
  children: React.ReactNode
}

// Component that handles wagmi hooks - only rendered after mounting
function FarcasterProviderInner({ children }: FarcasterProviderProps) {
  const [isReady, setIsReady] = useState(false)
  const [isFarcaster, setIsFarcaster] = useState(false)
  
  // Wagmi hooks for wallet connection
  const { isConnected, address } = useAccount()
  const { connect, connectors } = useConnect()

  useEffect(() => {
    // Check if we're running in a Farcaster Mini App
    const checkFarcaster = () => {
      try {
        // Check if SDK is available
        if (sdk && typeof sdk.actions !== 'undefined') {
          setIsFarcaster(true)
          return true
        }
      } catch (error) {
        console.log('Not running in Farcaster environment:', error)
      }
      return false
    }

    // Call ready when the interface is loaded - following official docs
    const callReady = async () => {
      if (checkFarcaster()) {
        try {
          // Use await as shown in the official documentation
          await sdk.actions.ready()
          setIsReady(true)
          console.log('Farcaster Mini App ready called successfully')
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

  const ready = async (options?: { disableNativeGestures?: boolean }) => {
    try {
      if (sdk && typeof sdk.actions !== 'undefined') {
        // Use await as shown in the official documentation
        await sdk.actions.ready(options)
        setIsReady(true)
        console.log('Farcaster ready called manually', options)
      }
    } catch (error) {
      console.error('Error calling Farcaster ready:', error)
    }
  }

  const disableNativeGestures = (disable: boolean) => {
    // This function now calls ready with the disableNativeGestures option
    ready({ disableNativeGestures: disable })
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

// Component that waits for QueryClient to be ready
function QueryClientWrapper({ children }: FarcasterProviderProps) {
  const [queryClientReady, setQueryClientReady] = useState(false)

  useEffect(() => {
    // Use a timeout to ensure QueryClient is initialized
    const timer = setTimeout(() => {
      setQueryClientReady(true)
    }, 200) // Give more time for QueryClient to initialize

    return () => clearTimeout(timer)
  }, [])

  if (!queryClientReady) {
    const defaultValue: FarcasterContextType = {
      isReady: false,
      isFarcaster: false,
      ready: async () => {},
      disableNativeGestures: () => {},
      walletAddress: undefined,
      isWalletConnected: false,
    }

    return (
      <FarcasterContext.Provider value={defaultValue}>
        {children}
      </FarcasterContext.Provider>
    )
  }

  return <FarcasterProviderInner>{children}</FarcasterProviderInner>
}

// Main provider component that handles SSR
export function FarcasterProvider({ children }: FarcasterProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // During SSR, provide default values
  if (!mounted) {
    const defaultValue: FarcasterContextType = {
      isReady: false,
      isFarcaster: false,
      ready: async () => {},
      disableNativeGestures: () => {},
      walletAddress: undefined,
      isWalletConnected: false,
    }

    return (
      <FarcasterContext.Provider value={defaultValue}>
        {children}
      </FarcasterContext.Provider>
    )
  }

  // After mounting, use the QueryClient wrapper
  return <QueryClientWrapper>{children}</QueryClientWrapper>
}
