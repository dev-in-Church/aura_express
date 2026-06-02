import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Truck,
  Clock,
  Package,
  Check,
  Ship,
  Plane,
  Warehouse,
  FileCheck,
} from "lucide-react";
import { mockServices } from "@/lib/mock-data";

const categoryImages = {
  road: "/images/fleet-truck-road.jpeg",
  sea: "/images/fleet-ship-port.jpeg",
  air: "/images/fleet-air-cargo.jpeg",
  support: "/images/fleet-container-truck.jpeg",
};

const categoryTitles = {
  road: "Road Freight",
  sea: "Sea Freight",
  air: "Air Freight",
  support: "Support Services",
};

const serviceIcons: Record<string, React.ReactNode> = {
  "Road Freight": <Truck className="h-6 w-6" />,
  "Heavy Haulage": <Truck className="h-6 w-6" />,
  "Cross-Border Transit": <Truck className="h-6 w-6" />,
  "Sea Freight": <Ship className="h-6 w-6" />,
  "Port Clearing": <Ship className="h-6 w-6" />,
  "Air Freight": <Plane className="h-6 w-6" />,
  Warehousing: <Warehouse className="h-6 w-6" />,
  "Procurement Services": <FileCheck className="h-6 w-6" />,
};

export default function ServicesPage() {
  const roadServices = mockServices.filter((s) => s.category === "road");
  const seaServices = mockServices.filter((s) => s.category === "sea");
  const airServices = mockServices.filter((s) => s.category === "air");
  const supportServices = mockServices.filter((s) => s.category === "support");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header with Hero Image */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/images/fleet-ship-ocean.jpeg"
              alt="AURA EXPRESS multimodal logistics"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Our Services
            </p>
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Multi-Modal Logistics Solutions
            </h1>
            <p className="max-w-2xl text-white/80">
              From road to sea to air - we move your cargo through the most
              efficient routes across Africa and beyond. Comprehensive freight
              forwarding and logistics services.
            </p>
          </div>
        </section>

        {/* Road Freight Section */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={categoryImages.road}
                  alt="Road Freight Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center bg-primary">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                  Road Freight
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Our fleet of Mercedes-Benz Actros and Beiben prime movers
                  delivers reliable road freight across the East African
                  Northern Corridor. From containerized cargo to heavy
                  machinery, we handle it all.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="h-5 w-5 text-primary" />
                    Mombasa – Nairobi – Kampala
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="h-5 w-5 text-primary" />
                    Mombasa – Kigali – Goma
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="h-5 w-5 text-primary" />
                    Mombasa – Juba (South Sudan)
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {roadServices.map((service) => (
                <Card key={service.id} className="border-border">
                  <CardHeader className="pb-4">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary">
                      {serviceIcons[service.name]}
                    </div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
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

        {/* Sea Freight Section */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center bg-primary">
                  <Ship className="h-6 w-6 text-white" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                  Sea Freight
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Ocean cargo services through Mombasa and Lamu ports. We handle
                  container shipping, port clearing, and customs brokerage for
                  international imports and exports.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="h-5 w-5 text-primary" />
                    FCL & LCL container options
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="h-5 w-5 text-primary" />
                    Port of Mombasa & Lamu operations
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="h-5 w-5 text-primary" />
                    International shipping connections
                  </li>
                </ul>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden order-1 lg:order-2">
                <Image
                  src={categoryImages.sea}
                  alt="Sea Freight Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {seaServices.map((service) => (
                <Card key={service.id} className="border-border bg-background">
                  <CardHeader className="pb-4">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary">
                      {serviceIcons[service.name]}
                    </div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
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

        {/* Air Freight Section */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={categoryImages.air}
                  alt="Air Freight Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center bg-primary">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                  Air Freight
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Express air cargo through JKIA for time-sensitive shipments.
                  Ideal for high-value goods, perishables, and urgent deliveries
                  across Africa and international destinations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="h-5 w-5 text-primary" />
                    Express and standard options
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="h-5 w-5 text-primary" />
                    Temperature-controlled cargo
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="h-5 w-5 text-primary" />
                    Door-to-door service
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-1 max-w-xl">
              {airServices.map((service) => (
                <Card key={service.id} className="border-border">
                  <CardHeader className="pb-4">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary">
                      {serviceIcons[service.name]}
                    </div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
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

        {/* Support Services Section */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-10 text-center">
              <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center bg-primary">
                <Package className="h-6 w-6 text-white" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                Support Services
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Comprehensive logistics support including warehousing,
                procurement management, and compliance services.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {supportServices.map((service) => (
                <Card key={service.id} className="border-border bg-background">
                  <CardHeader className="pb-4">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary">
                      {serviceIcons[service.name]}
                    </div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
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

        {/* CTA */}
        <section className="bg-primary">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                Need a Custom Logistics Solution?
              </h2>
              <p className="mb-6 max-w-md text-white/80">
                Our team can design a multi-modal logistics solution tailored to
                your specific requirements.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/quote">Request Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-black"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
