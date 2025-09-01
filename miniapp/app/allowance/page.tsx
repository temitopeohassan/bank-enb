"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Coins, Clock, CheckCircle, ArrowLeft, TrendingUp, Users, Gift } from "lucide-react"
import Link from "next/link"

export default function AllowancePage() {
  const [claimed, setClaimed] = useState(false)
  const [timeLeft, setTimeLeft] = useState("23:45:12")

  const handleClaim = () => {
    setClaimed(true)
    // Here you would integrate with the actual claim API
  }

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
              <h1 className="text-xl font-bold text-foreground">Daily Allowance</h1>
            </div>
            <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
              Connected
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pb-20">
        {/* Claim Card */}
        <Card className="mb-6">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Coins className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Daily ENB Allowance</CardTitle>
            <CardDescription>Claim your daily 100 ENB tokens. Available every 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {!claimed ? (
              <>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100 ENB</div>
                  <p className="text-muted-foreground">Ready to claim</p>
                </div>
                <Button onClick={handleClaim} className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Coins className="w-5 h-5 mr-2" />
                  Claim Daily Allowance
                </Button>
              </>
            ) : (
              <>
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-primary mb-2">Claimed!</div>
                  <p className="text-muted-foreground">100 ENB added to your balance</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Next claim available in:</span>
                    <Badge variant="outline">
                      <Clock className="w-3 h-3 mr-1" />
                      {timeLeft}
                    </Badge>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground">7</div>
              <div className="text-sm text-muted-foreground">Days Streak</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">2,800</div>
              <div className="text-sm text-muted-foreground">Total Claimed</div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Claims */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Claims</CardTitle>
            <CardDescription>Your last 5 daily allowance claims</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { date: "Today", amount: "100 ENB", status: "claimed" },
                { date: "Yesterday", amount: "100 ENB", status: "claimed" },
                { date: "2 days ago", amount: "100 ENB", status: "claimed" },
                { date: "3 days ago", amount: "100 ENB", status: "claimed" },
                { date: "4 days ago", amount: "100 ENB", status: "claimed" },
              ].map((claim, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div>
                    <div className="font-medium text-sm">{claim.date}</div>
                    <div className="text-xs text-muted-foreground">{claim.amount}</div>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Claimed
                  </Badge>
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
            <Link href="/allowance" className="flex flex-col items-center py-2 px-3 text-primary">
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
