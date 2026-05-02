import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Clock, Package, Check } from "lucide-react"
import { mockServices } from "@/lib/mock-data"

const serviceIcons: Record<string, React.ReactNode> = {
  "Standard Freight": <Truck className="h-6 w-6" />,
  "Express Freight": <Truck className="h-6 w-6" />,
  "Cross-Border Freight": <Truck className="h-6 w-6" />,
  "Heavy Freight": <Truck className="h-6 w-6" />,
  "Warehousing": <Package className="h-6 w-6" />,
  "Last Mile Delivery": <Clock className="h-6 w-6" />,
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Services</p>
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Road Freight Solutions</h1>
            <p className="max-w-2xl text-muted-foreground">
              Comprehensive trucking and logistics services across East Africa. 
              From local delivery to cross-border freight, we keep your cargo moving.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockServices.map((service) => (
                <Card key={service.id} className="border-border">
                  <CardHeader className="pb-4">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
                      {serviceIcons[service.name]}
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                          <Check className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">How It Works</p>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Our Process</h2>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", title: "Booking", desc: "Submit your shipment details" },
                { step: "02", title: "Collection", desc: "We pick up from your location" },
                { step: "03", title: "Transit", desc: "Secure truck transportation" },
                { step: "04", title: "Delivery", desc: "Safe delivery with confirmation" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border-2 border-primary text-lg font-bold text-primary">
                    {item.step}
                  </div>
                  <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">Questions About Our Services?</h2>
              <p className="mb-6 max-w-md text-muted-foreground">
                Reach out to our team for more details on how we can support your logistics needs.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
