'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '@/lib/wagmi'
import { ReactNode } from 'react'

const queryClient = new QueryClient()

interface WagmiAppProviderProps {
  children: ReactNode
}

export function WagmiAppProvider({ children }: WagmiAppProviderProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
