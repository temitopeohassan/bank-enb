import type { Metadata } from 'next'
import { GeistSans } from 'geist/font'
import { GeistMono } from 'geist/font'
import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import { WagmiAppProvider } from '@/components/wagmi-provider'
import { FarcasterProvider } from '@/components/farcaster-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bank ENB',
  description: 'Your community-driven financial hub on Farcaster. Earn, stake, save, and win together.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@farcaster/miniapp-sdk@0.1.9/dist/index.js" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <WagmiAppProvider>
          <FarcasterProvider>
            {children}
          </FarcasterProvider>
        </WagmiAppProvider>
        <Analytics />
      </body>
    </html>
  )
}
