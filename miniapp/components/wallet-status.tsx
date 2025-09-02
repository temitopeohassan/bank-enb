'use client'

import { useAccount, useBalance } from 'wagmi'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useState } from 'react'

export function WalletStatus() {
  const [mounted, setMounted] = useState(false)
  const { isConnected, address, chainId } = useAccount()
  const { data: balance } = useBalance({
    address,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until mounted to avoid SSR issues
  if (!mounted) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Wallet Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="outline" className="text-muted-foreground">
            Loading...
          </Badge>
        </CardContent>
      </Card>
    )
  }

  if (!isConnected || !address) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Wallet Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="outline" className="text-red-600 border-red-500">
            Not Connected
          </Badge>
        </CardContent>
      </Card>
    )
  }

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Wallet Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Address:</span>
          <Badge variant="secondary" className="font-mono">
            {truncateAddress(address)}
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Chain ID:</span>
          <Badge variant="outline">{chainId}</Badge>
        </div>
        {balance && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Balance:</span>
            <Badge variant="outline" className="bg-green-500/10 text-green-600">
              {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
