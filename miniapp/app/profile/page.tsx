"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  User,
  ArrowLeft,
  Wallet,
  History,
  Settings,
  LogOut,
  Copy,
  ExternalLink,
  Coins,
  TrendingUp,
  Users,
  Gift,
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const walletAddress = "0x1234...5678"

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
              <h1 className="text-xl font-bold text-foreground">Profile</h1>
            </div>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pb-20">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/diverse-user-avatars.png" />
                <AvatarFallback className="bg-primary/10 text-primary text-lg">
                  <User className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground">ENB Member</h2>
                <p className="text-muted-foreground">@enbuser123</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <Wallet className="w-3 h-3 mr-1" />
                    Connected
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Member since Jan 2024
                  </Badge>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Wallet Address</p>
                  <p className="font-mono text-sm">{walletAddress}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Balance Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Balance Overview</CardTitle>
            <CardDescription>Your current token balances and earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-1">1,234</div>
                <div className="text-sm text-muted-foreground">ENB Balance</div>
              </div>
              <div className="text-center p-4 bg-chart-2/5 rounded-lg border border-chart-2/20">
                <div className="text-2xl font-bold text-chart-2">$56.78</div>
                <div className="text-sm text-muted-foreground">USDC Earned</div>
              </div>
              <div className="text-center p-4 bg-chart-3/5 rounded-lg border border-chart-3/20">
                <div className="text-2xl font-bold text-chart-3">890</div>
                <div className="text-sm text-muted-foreground">Staked ENB</div>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20">
                <div className="text-2xl font-bold text-accent">5</div>
                <div className="text-sm text-muted-foreground">Raffle Entries</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Stats */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Activity Stats</CardTitle>
            <CardDescription>Your participation in Bank ENB</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Daily Claims Streak</span>
              <Badge className="bg-primary/10 text-primary">7 days</Badge>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-sm">Total ENB Claimed</span>
              <span className="font-medium">2,800 ENB</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-sm">Staking Rewards Earned</span>
              <span className="font-medium text-chart-2">$156.78 USDC</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-sm">Contribution Groups</span>
              <span className="font-medium">1 Active</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-sm">Raffle Participation</span>
              <span className="font-medium">3 months</span>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <History className="w-5 h-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your latest transactions and activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { type: "Daily Claim", amount: "+100 ENB", time: "2 hours ago", status: "completed" },
                { type: "Staking Reward", amount: "+$12.34 USDC", time: "1 day ago", status: "completed" },
                { type: "Contribution", amount: "-500 ENB", time: "2 days ago", status: "completed" },
                { type: "Raffle Entry", amount: "1 Entry", time: "3 days ago", status: "completed" },
                { type: "Stake", amount: "-200 ENB", time: "5 days ago", status: "completed" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div>
                    <div className="font-medium text-sm">{activity.type}</div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
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
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              View All Activity
            </Button>
          </CardContent>
        </Card>

        {/* Account Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <History className="w-4 h-4 mr-2" />
              Transaction History
            </Button>
            <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
              <LogOut className="w-4 h-4 mr-2" />
              Disconnect Wallet
            </Button>
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
            <Link
              href="/stake"
              className="flex flex-col items-center py-2 px-3 text-muted-foreground hover:text-foreground"
            >
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
            <Link href="/profile" className="flex flex-col items-center py-2 px-3 text-primary">
              <Gift className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Profile</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
