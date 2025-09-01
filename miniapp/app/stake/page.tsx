"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, ArrowLeft, DollarSign, Coins, Clock, Users, Gift } from "lucide-react"
import Link from "next/link"

export default function StakePage() {
  const [stakeAmount, setStakeAmount] = useState("")
  const [unstakeAmount, setUnstakeAmount] = useState("")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-foreground">Stake ENB</h1>
            </div>
            <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
              Connected
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pb-20">
        {/* Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-6 h-6 text-chart-3 mx-auto mb-2" />
              <div className="text-lg font-bold text-foreground">12.5%</div>
              <div className="text-xs text-muted-foreground">Current APR</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Coins className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-lg font-bold text-primary">890</div>
              <div className="text-xs text-muted-foreground">Staked ENB</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <DollarSign className="w-6 h-6 text-chart-2 mx-auto mb-2" />
              <div className="text-lg font-bold text-chart-2">$56.78</div>
              <div className="text-xs text-muted-foreground">USDC Earned</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
              <div className="text-lg font-bold text-foreground">30d</div>
              <div className="text-xs text-muted-foreground">Lock Period</div>
            </CardContent>
          </Card>
        </div>

        {/* Staking Interface */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Stake & Earn</CardTitle>
            <CardDescription>Stake your ENB tokens to earn USDC rewards with a competitive 12.5% APR</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="stake" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="stake">Stake ENB</TabsTrigger>
                <TabsTrigger value="unstake">Unstake</TabsTrigger>
              </TabsList>

              <TabsContent value="stake" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="stake-amount">Amount to Stake</Label>
                  <div className="relative">
                    <Input
                      id="stake-amount"
                      placeholder="0.00"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      className="pr-16"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">ENB</div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Available: 1,234 ENB</span>
                    <Button variant="link" className="h-auto p-0 text-xs" onClick={() => setStakeAmount("1234")}>
                      Max
                    </Button>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Estimated Annual Rewards:</span>
                    <span className="font-medium text-chart-2">
                      ${stakeAmount ? (Number.parseFloat(stakeAmount) * 0.125 * 0.5).toFixed(2) : "0.00"} USDC
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Lock Period:</span>
                    <span className="font-medium">30 days</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" disabled={!stakeAmount}>
                  Stake {stakeAmount || "0"} ENB
                </Button>
              </TabsContent>

              <TabsContent value="unstake" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="unstake-amount">Amount to Unstake</Label>
                  <div className="relative">
                    <Input
                      id="unstake-amount"
                      placeholder="0.00"
                      value={unstakeAmount}
                      onChange={(e) => setUnstakeAmount(e.target.value)}
                      className="pr-16"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">ENB</div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Staked: 890 ENB</span>
                    <Button variant="link" className="h-auto p-0 text-xs" onClick={() => setUnstakeAmount("890")}>
                      Max
                    </Button>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Pending USDC Rewards:</span>
                    <span className="font-medium text-chart-2">$56.78 USDC</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Unlock Date:</span>
                    <span className="font-medium">Available Now</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent" disabled={!unstakeAmount}>
                  Unstake {unstakeAmount || "0"} ENB
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Staking History */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Staking History</CardTitle>
            <CardDescription>Your recent staking activities and rewards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { type: "Reward", amount: "+$12.34 USDC", date: "2 hours ago", status: "completed" },
                { type: "Stake", amount: "500 ENB", date: "1 day ago", status: "completed" },
                { type: "Reward", amount: "+$8.90 USDC", date: "1 day ago", status: "completed" },
                { type: "Unstake", amount: "200 ENB", date: "3 days ago", status: "completed" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div>
                    <div className="font-medium text-sm">{activity.type}</div>
                    <div className="text-xs text-muted-foreground">{activity.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">{activity.amount}</div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-around py-2">
            <Link
              href="/allowance"
              className="flex flex-col items-center py-2 px-3 text-muted-foreground hover:text-foreground"
            >
              <Coins className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Allowance</span>
            </Link>
            <Link href="/stake" className="flex flex-col items-center py-2 px-3 text-primary">
              <TrendingUp className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Stake</span>
            </Link>
            <Link
              href="/contribution"
              className="flex flex-col items-center py-2 px-3 text-muted-foreground hover:text-foreground"
            >
              <Users className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Contribution</span>
            </Link>
            <Link
              href="/profile"
              className="flex flex-col items-center py-2 px-3 text-muted-foreground hover:text-foreground"
            >
              <Gift className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Profile</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
