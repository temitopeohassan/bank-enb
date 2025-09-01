import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Coins, TrendingUp, Users, Gift } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Coins className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">Bank ENB</h1>
            </div>
            <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
              Connected
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-20">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2 text-balance">Welcome to Bank ENB</h2>
          <p className="text-muted-foreground text-pretty">
            Your community-driven financial hub on Farcaster. Earn, stake, save, and win together.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Daily Allowance */}
          <Card className="border-border hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Coins className="w-5 h-5 text-primary" />
                  Daily Allowance
                </CardTitle>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">100 ENB</Badge>
              </div>
              <CardDescription>Collect your daily 100 ENB allowance. Available every 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/allowance">
                <Button className="w-full bg-primary hover:bg-primary/90">Claim Daily Allowance</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Raffle Draw */}
          <Card className="border-border hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Gift className="w-5 h-5 text-accent" />
                  Raffle Draw
                </CardTitle>
                <Badge className="bg-accent/10 text-accent hover:bg-accent/20">500M ENB</Badge>
              </div>
              <CardDescription>500,000,000 ENB to be won in the monthly raffle draw.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/raffle">
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  View Raffle Info
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Stake ENB */}
          <Card className="border-border hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-chart-3" />
                  Stake ENB, Earn USDC
                </CardTitle>
                <Badge variant="secondary">Active</Badge>
              </div>
              <CardDescription>Stake ENB tokens and earn USDC rewards with competitive APR.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/stake">
                <Button variant="outline" className="w-full bg-transparent">
                  Start Staking
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Contribution Plan */}
          <Card className="border-border hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-chart-2" />
                  Contribution Plan
                </CardTitle>
                <Badge variant="secondary">Stokvel</Badge>
              </div>
              <CardDescription>Join a stokvel-style contribution plan and grow your savings together.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/contribution">
                <Button variant="outline" className="w-full bg-transparent">
                  Join Plan
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-primary">1,234</div>
            <div className="text-sm text-muted-foreground">ENB Balance</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-chart-3">$56.78</div>
            <div className="text-sm text-muted-foreground">USDC Earned</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-chart-2">890</div>
            <div className="text-sm text-muted-foreground">Staked ENB</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-accent">5</div>
            <div className="text-sm text-muted-foreground">Raffle Entries</div>
          </div>
        </div>
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
