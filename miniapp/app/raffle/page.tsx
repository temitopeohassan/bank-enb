"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Gift, ArrowLeft, Trophy, Users, Ticket, Coins, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function RafflePage() {
  const [entered, setEntered] = useState(false)

  const handleEnterRaffle = () => {
    setEntered(true)
    // Here you would integrate with the actual raffle entry API
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
              <h1 className="text-xl font-bold text-foreground">Monthly Raffle</h1>
            </div>
            <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
              Connected
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pb-20">
        {/* Prize Pool */}
        <Card className="mb-6 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-accent" />
            </div>
            <CardTitle className="text-3xl font-bold text-accent">500,000,000 ENB</CardTitle>
            <CardDescription className="text-lg">Monthly Prize Pool</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-foreground">1,247</div>
                <div className="text-xs text-muted-foreground">Total Entries</div>
              </div>
              <div>
                <div className="text-xl font-bold text-primary">15</div>
                <div className="text-xs text-muted-foreground">Days Left</div>
              </div>
              <div>
                <div className="text-xl font-bold text-chart-2">1</div>
                <div className="text-xs text-muted-foreground">Winner</div>
              </div>
              <div>
                <div className="text-xl font-bold text-accent">5</div>
                <div className="text-xs text-muted-foreground">Your Entries</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Draw Progress</span>
                <span className="font-medium">March 31, 2024</span>
              </div>
              <Progress value={50} className="h-3" />
              <div className="text-xs text-muted-foreground text-center">Raffle draw in 15 days</div>
            </div>
          </CardContent>
        </Card>

        {/* Entry Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ticket className="w-5 h-5 text-primary" />
              Enter Raffle
            </CardTitle>
            <CardDescription>Connect your wallet to enter the monthly raffle draw</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!entered ? (
              <>
                <div className="bg-muted rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Entry Requirements:</span>
                    <span className="font-medium text-primary">✓ Wallet Connected</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cost per Entry:</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Max Entries:</span>
                    <span className="font-medium">1 per wallet</span>
                  </div>
                </div>

                <Button
                  onClick={handleEnterRaffle}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Enter Raffle Draw
                </Button>
              </>
            ) : (
              <>
                <div className="text-center py-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Ticket className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">You're Entered!</h3>
                  <p className="text-muted-foreground">Your wallet is registered for the March 2024 raffle draw</p>
                </div>

                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Your Entry Status:</span>
                    <Badge className="bg-primary/10 text-primary">
                      <Ticket className="w-3 h-3 mr-1" />
                      Confirmed
                    </Badge>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">How It Works</CardTitle>
            <CardDescription>Understanding the Bank ENB raffle system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-sm">Connect Your Wallet</h4>
                  <p className="text-xs text-muted-foreground">
                    Link your Ethereum wallet to participate in the raffle
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-sm">Enter the Draw</h4>
                  <p className="text-xs text-muted-foreground">One free entry per wallet address each month</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-xs font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-sm">Random Selection</h4>
                  <p className="text-xs text-muted-foreground">Smart contract randomly selects winner at month end</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-xs font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-medium text-sm">Winner Gets Prize</h4>
                  <p className="text-xs text-muted-foreground">500M ENB tokens automatically transferred to winner</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Previous Winners */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Trophy className="w-5 h-5 text-accent" />
              Previous Winners
            </CardTitle>
            <CardDescription>Recent raffle draw results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { month: "February 2024", winner: "0x1234...5678", prize: "500,000,000 ENB", entries: 1156 },
                { month: "January 2024", winner: "0x9876...4321", prize: "500,000,000 ENB", entries: 987 },
                { month: "December 2023", winner: "0x5555...9999", prize: "500,000,000 ENB", entries: 834 },
              ].map((draw, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                  <div>
                    <div className="font-medium text-sm">{draw.month}</div>
                    <div className="text-xs text-muted-foreground">
                      Winner: {draw.winner} • {draw.entries} entries
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm text-accent">{draw.prize}</div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                      <Trophy className="w-3 h-3 mr-1" />
                      Won
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
