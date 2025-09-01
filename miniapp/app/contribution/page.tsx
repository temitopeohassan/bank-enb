"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Users, ArrowLeft, Calendar, Target, TrendingUp, Coins, Gift } from "lucide-react"
import Link from "next/link"

export default function ContributionPage() {
  const [contributionAmount, setContributionAmount] = useState("")

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
              <h1 className="text-xl font-bold text-foreground">Contribution Plan</h1>
            </div>
            <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
              Connected
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pb-20">
        {/* Current Plan Overview */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-chart-2" />
                  Stokvel Group #1
                </CardTitle>
                <CardDescription>Community savings group with 12 members</CardDescription>
              </div>
              <Badge className="bg-chart-2/10 text-chart-2">Active</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-chart-2">12</div>
                <div className="text-xs text-muted-foreground">Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500</div>
                <div className="text-xs text-muted-foreground">ENB/Month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">6,000</div>
                <div className="text-xs text-muted-foreground">Pool Size</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3</div>
                <div className="text-xs text-muted-foreground">Your Turn</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Current Cycle Progress</span>
                <span className="font-medium">8/12 paid</span>
              </div>
              <Progress value={67} className="h-2" />
              <div className="text-xs text-muted-foreground">Next payout in 4 days to Member #9</div>
            </div>
          </CardContent>
        </Card>

        {/* Make Contribution */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Make Monthly Contribution</CardTitle>
            <CardDescription>Contribute 500 ENB for this month's cycle</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contribution-amount">Contribution Amount</Label>
              <div className="relative">
                <Input
                  id="contribution-amount"
                  placeholder="500"
                  value={contributionAmount}
                  onChange={(e) => setContributionAmount(e.target.value)}
                  className="pr-16"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">ENB</div>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Required: 500 ENB</span>
                <span>Available: 1,234 ENB</span>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Due Date:</span>
                <span className="font-medium">March 15, 2024</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Status:</span>
                <Badge variant="outline" className="text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  Pending
                </Badge>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90">
              <Target className="w-4 h-4 mr-2" />
              Pay 500 ENB Contribution
            </Button>
          </CardContent>
        </Card>

        {/* Payout Schedule */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Payout Schedule</CardTitle>
            <CardDescription>When each member receives their payout</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { member: "You", position: 3, amount: "6,000 ENB", status: "upcoming", date: "May 2024" },
                { member: "Member #9", position: 9, amount: "6,000 ENB", status: "next", date: "March 2024" },
                { member: "Member #5", position: 5, amount: "6,000 ENB", status: "completed", date: "Feb 2024" },
                { member: "Member #2", position: 2, amount: "6,000 ENB", status: "completed", date: "Jan 2024" },
              ].map((payout, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div>
                    <div className="font-medium text-sm">{payout.member}</div>
                    <div className="text-xs text-muted-foreground">Position #{payout.position}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">{payout.amount}</div>
                    <div className="text-xs text-muted-foreground">{payout.date}</div>
                  </div>
                  <Badge
                    variant={
                      payout.status === "completed" ? "secondary" : payout.status === "next" ? "default" : "outline"
                    }
                    className={`text-xs ${
                      payout.status === "completed"
                        ? "bg-primary/10 text-primary"
                        : payout.status === "next"
                          ? "bg-accent/10 text-accent"
                          : ""
                    }`}
                  >
                    {payout.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Join New Group */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Join Another Group</CardTitle>
            <CardDescription>Diversify your savings with multiple contribution plans</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">Stokvel Group #2</h4>
                    <p className="text-sm text-muted-foreground">1,000 ENB/month • 8 members</p>
                  </div>
                  <Badge variant="outline">2 spots left</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Pool: </span>
                    <span className="font-medium">8,000 ENB</span>
                  </div>
                  <Button size="sm" variant="outline">
                    Join Group
                  </Button>
                </div>
              </div>
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
            <Link
              href="/stake"
              className="flex flex-col items-center py-2 px-3 text-muted-foreground hover:text-foreground"
            >
              <TrendingUp className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Stake</span>
            </Link>
            <Link href="/contribution" className="flex flex-col items-center py-2 px-3 text-primary">
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
