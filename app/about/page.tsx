import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Users, Globe, Award, Target } from "lucide-react"
import { stats } from "@/lib/mock-data"

const values = [
  {
    icon: Target,
    title: "Reliability",
    description: "We deliver on our promises. Every shipment, every time.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We go the extra mile.",
  },
  {
    icon: Globe,
    title: "African Expertise",
    description: "Deep knowledge of African markets and logistics networks.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest standards in everything we do.",
  },
]

const milestones = [
  { year: "2014", event: "Founded in Mombasa, Kenya" },
  { year: "2016", event: "Expanded to Tanzania and Uganda" },
  { year: "2018", event: "Launched air freight services" },
  { year: "2020", event: "Opened warehousing facilities" },
  { year: "2022", event: "Reached 35,000 shipments milestone" },
  { year: "2024", event: "Expanded to 15 African countries" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">About Us</p>
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Your Trusted Logistics Partner</h1>
            <p className="max-w-2xl text-muted-foreground">
              Based in Mombasa, Kenya, AURA EXPRESS AFRICA LTD has been connecting businesses 
              across the continent with reliable logistics solutions since 2014.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Our Story</p>
                <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">Built for African Business</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    AURA EXPRESS AFRICA LTD was founded in Mombasa with a clear mission: to provide 
                    businesses across Africa with logistics services that match international standards 
                    while understanding local realities.
                  </p>
                  <p>
                    Starting with a small fleet of trucks serving the Mombasa-Nairobi corridor, we have 
                    grown into a comprehensive logistics provider offering road, air, and sea freight 
                    services across 15 African countries.
                  </p>
                  <p>
                    Our deep understanding of African infrastructure, customs procedures, and business 
                    culture sets us apart. We navigate the complexities so our clients can focus on 
                    growing their businesses.
                  </p>
                </div>
              </div>
              
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Timeline</p>
                <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">Our Journey</h2>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                      <span className="w-16 flex-shrink-0 font-mono text-sm font-semibold text-primary">
                        {milestone.year}
                      </span>
                      <span className="text-foreground">{milestone.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Our Values</p>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">What Drives Us</h2>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Why Choose Us</p>
                <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">The AURA Advantage</h2>
                <ul className="space-y-4">
                  {[
                    "Strategic location at Mombasa Port, East Africa's largest port",
                    "Extensive network across 15 African countries",
                    "Modern fleet with real-time GPS tracking",
                    "Experienced customs clearance team",
                    "24/7 customer support",
                    "Competitive and transparent pricing",
                    "Insurance coverage for all shipments",
                    "Dedicated account managers for business clients",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col justify-center">
                <Card className="border-border bg-background">
                  <CardContent className="p-8">
                    <h3 className="mb-4 text-xl font-semibold text-foreground">Ready to Partner With Us?</h3>
                    <p className="mb-6 text-muted-foreground">
                      Join thousands of businesses that trust AURA EXPRESS for their logistics needs.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button asChild>
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/services">View Services</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
