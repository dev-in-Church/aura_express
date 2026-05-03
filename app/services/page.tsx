import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Truck,
  Clock,
  Package,
  Check,
  Globe,
  Shield,
  FileCheck,
  Route,
  Warehouse,
  TrendingUp,
  MapPin,
  Phone,
} from "lucide-react";

// Real services based on company profile
const services = [
  {
    id: 1,
    name: "International Freight Forwarding",
    description:
      "Expert handling of containerized and loose cargo from the Port of Mombasa to the hinterlands of East Africa.",
    icon: Package,
    features: [
      "Containerized cargo handling",
      "Loose cargo consolidation",
      "Port of Mombasa expertise",
      "Door-to-door delivery",
      "Real-time shipment tracking",
    ],
  },
  {
    id: 2,
    name: "Regional Transit Excellence",
    description:
      "Specialized long-haul routes connecting Kenya to Uganda, Rwanda, South Sudan, and the DRC.",
    icon: Route,
    features: [
      "Kenya - Uganda corridor",
      "Kenya - Rwanda route",
      "Kenya - South Sudan",
      "Kenya - DRC (Goma/Lubumbashi)",
      "Cross-border documentation",
    ],
  },
  {
    id: 3,
    name: "Procurement Management",
    description:
      "Strategic sourcing and documentation audits ensuring 100% compliance with border and customs regulations.",
    icon: FileCheck,
    features: [
      "T1 Bonds handling",
      "Certificates of Origin",
      "Customs declarations",
      "Documentation audits",
      "Border compliance guarantee",
    ],
  },
  {
    id: 4,
    name: "Asset-Light Supply Chain Solutions",
    description:
      "Leveraging a vast network of vetted partner carriers to provide scalable capacity for large-scale contracts.",
    icon: TrendingUp,
    features: [
      "Scalable carrier network",
      "Vetted partner carriers",
      "Large contract capacity",
      "Flexible fleet solutions",
      "Cost-effective scaling",
    ],
  },
  {
    id: 5,
    name: "Fleet & Technology",
    description:
      "Mercedes-Benz Actros and Beiben prime movers with real-time GPS tracking and RECTS monitoring.",
    icon: Truck,
    features: [
      "Mercedes-Benz Actros prime movers",
      "Beiben heavy-duty trucks",
      "Real-time GPS tracking",
      "RECTS cargo monitoring",
      "Professional vetted drivers",
    ],
  },
  {
    id: 6,
    name: "Cargo Insurance & Security",
    description:
      "Comprehensive Goods-In-Transit (GIT) insurance for all shipments with maximum security protocols.",
    icon: Shield,
    features: [
      "Full GIT insurance coverage",
      "Cargo theft prevention",
      "Secure loading procedures",
      "24/7 security monitoring",
      "Claims assistance",
    ],
  },
];

// Key routes served
const keyRoutes = [
  "Mombasa – Nairobi – Kampala (Uganda)",
  "Mombasa – Kigali (Rwanda)",
  "Mombasa – Juba (South Sudan)",
  "Mombasa – Goma/Lubumbashi (DRC)",
];

// Service process based on actual operations
const processSteps = [
  {
    step: "01",
    title: "Consultation",
    desc: "Discuss your logistics requirements and get a customized solution",
  },
  {
    step: "02",
    title: "Booking & Documentation",
    desc: "We handle all customs paperwork, T1 Bonds, and certificates",
  },
  {
    step: "03",
    title: "Collection",
    desc: "Cargo pickup from your location or the Port of Mombasa",
  },
  {
    step: "04",
    title: "Transit with Tracking",
    desc: "GPS-tracked transport with RECTS monitoring",
  },
  {
    step: "05",
    title: "Customs Clearance",
    desc: "Expert border compliance and customs clearance",
  },
  {
    step: "06",
    title: "Delivery",
    desc: "Safe delivery with confirmation and documentation",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Our Services
            </p>
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              International Procurement, Freight & Logistics
            </h1>
            <p className="max-w-3xl text-lg font-semibold text-primary">
              Bridging the gap between global supply chains and regional
              delivery
            </p>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              We specialize in seamless, high-capacity transport solutions
              across the East African Northern Corridor, combining professional
              procurement expertise with a modern, high-performance fleet.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Our Core Services
              </h2>
              <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                Comprehensive logistics solutions tailored to the East African
                market
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.id}
                    className="border-border hover:border-primary/50 transition-all"
                  >
                    <CardHeader className="pb-4">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
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
                            <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Routes - Our Network */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                  Our Network
                </p>
                <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
                  Dominating East Africa's Logistics Artery
                </h2>
                <p className="mb-6 text-muted-foreground">
                  We provide reliable transit on the following key routes across
                  the region:
                </p>
                <ul className="space-y-3">
                  {keyRoutes.map((route, index) => (
                    <li key={index} className="flex gap-3">
                      <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground">{route}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-center">
                <Card className="border-border bg-background">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Strategic Location
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Headquartered at the Port of Mombasa, East Africa's
                          busiest gateway, giving us unparalleled access to
                          regional trade routes and faster cargo clearance.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Process */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                How It Works
              </p>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Our Service Process
              </h2>
              <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                From consultation to delivery — we handle every step with
                precision and care
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((item) => (
                <Card key={item.step} className="border-border text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-primary/5 text-lg font-bold text-primary">
                      {item.step}
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                The AURA Advantage
              </p>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Why Choose Our Services
              </h2>
              <p className="mt-2 italic text-primary">
                "Efficiency is not an option; it is our standard."
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Truck,
                  title: "Premium Fleet",
                  description:
                    "Mercedes-Benz Actros and Beiben prime movers optimized for regional terrain",
                },
                {
                  icon: Globe,
                  title: "Technology-Driven",
                  description:
                    "Real-time GPS tracking and Electronic Cargo Tracking System (RECTS)",
                },
                {
                  icon: Shield,
                  title: "Full Insurance",
                  description:
                    "Comprehensive Goods-In-Transit (GIT) insurance for all cargo",
                },
                {
                  icon: FileCheck,
                  title: "Expert Documentation",
                  description:
                    "100% compliance with T1 Bonds, Certificates of Origin, and customs declarations",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                Ready to Ship With Us?
              </h2>
              <p className="mb-8 max-w-2xl text-white/90">
                Whether you need international freight forwarding, regional
                transit, or procurement management - our team is ready to
                provide a customized logistics solution for your business.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Request a Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-primary text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <Link href="/about">Learn About Our Company</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+254 736 758 613</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Mombasa, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
