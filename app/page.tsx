import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Truck,
  Package,
  Clock,
  Shield,
  Search,
  MapPin,
  CheckCircle2,
  Globe,
  Award,
  Users,
  Target,
  FileCheck,
  Route,
  Warehouse,
  Phone,
  Mail,
} from "lucide-react";

// Real services based on company profile
const services = [
  {
    id: 1,
    name: "International Freight Forwarding",
    description:
      "Expert handling of containerized and loose cargo from the Port of Mombasa to the hinterlands of East Africa.",
    icon: Package,
  },
  {
    id: 2,
    name: "Regional Transit Excellence",
    description:
      "Specialized long-haul routes connecting Kenya to Uganda, Rwanda, South Sudan, and the DRC.",
    icon: Route,
  },
  {
    id: 3,
    name: "Procurement Management",
    description:
      "Strategic sourcing and documentation audits ensuring 100% compliance with border and customs regulations.",
    icon: FileCheck,
  },
  {
    id: 4,
    name: "Asset-Light Supply Chain Solutions",
    description:
      "Leveraging a vast network of vetted partner carriers to provide scalable capacity for large-scale contracts.",
    icon: Warehouse,
  },
];

// Key routes served
const keyRoutes = [
  "Mombasa – Nairobi – Kampala (Uganda)",
  "Mombasa – Kigali (Rwanda)",
  "Mombasa – Juba (South Sudan)",
  "Mombasa – Goma/Lubumbashi (DRC)",
];

// Fleet advantages - based on actual company info
const fleetAdvantages = [
  {
    icon: Truck,
    title: "Mercedes-Benz Actos & Beiben Prime Movers",
    description:
      "Industry-leading prime movers optimized for heavy-duty regional terrain",
  },
  {
    icon: Globe,
    title: "Real-Time GPS Tracking & RECTS",
    description:
      "Electronic Cargo Tracking System for maximum security and visibility",
  },
  {
    icon: Shield,
    title: "Comprehensive GIT Insurance",
    description: "Goods-In-Transit insurance covering all cargo shipments",
  },
  {
    icon: Users,
    title: "Professional Vetted Drivers",
    description: "Experienced drivers trained in cross-border protocols",
  },
];

// Competitive advantages
const advantages = [
  {
    icon: Target,
    title: "100% Border Compliance",
    description:
      "Expert handling of T1 Bonds, Certificates of Origin, and Customs Declarations",
  },
  {
    icon: MapPin,
    title: "Strategic Mombasa Location",
    description:
      "Headquartered at East Africa's largest port for optimal access",
  },
  {
    icon: Clock,
    title: "24/7 Customer Support",
    description: "Dedicated support for all your logistics needs",
  },
  {
    icon: Award,
    title: "Procurement IQ",
    description:
      "Led by procurement specialists to prevent costly border delays",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-truck.jpg"
              alt="AURA EXPRESS AFRICA LTD - Premier Logistics Fleet"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-white">
                  Your Reliable Partner in International Procurement, Freight,
                  and Logistics
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-balance">AURA EXPRESS AFRICA LTD.</span>
              </h1>

              <p className="mb-8 text-lg text-white/90">
                Premier logistics and procurement firm headquartered in Mombasa,
                Kenya. Specializing in seamless, high-capacity transport
                solutions across the East African Northern Corridor.
              </p>

              {/* Key Points */}
              <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white">
                    International Freight
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white">Customs Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white">GPS Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white">
                    Asset-Light Solutions
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-black text-white hover:bg-white hover:text-black"
                  asChild
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                  What We Offer
                </p>
                <h2 className="text-3xl font-bold text-foreground">
                  Our Core Services
                </h2>
                <p className="mt-2 max-w-2xl text-muted-foreground">
                  Bridging the gap between global supply chains and regional
                  delivery with professional expertise and modern solutions.
                </p>
              </div>
              <Link
                href="/services"
                className="hidden text-sm font-medium text-primary hover:underline sm:block"
              >
                View All Services →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.id}
                    className="border-border transition-all hover:border-primary/50 hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Link
              href="/services"
              className="mt-8 block text-center text-sm font-medium text-primary hover:underline sm:hidden"
            >
              View All Services →
            </Link>
          </div>
        </section>

        {/* Key Routes - Our Network */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                Our Network
              </p>
              <h2 className="text-3xl font-bold text-foreground">
                Dominating East Africa's Logistics Artery
              </h2>
              <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                We provide reliable transit on the following key routes across
                the region
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {keyRoutes.map((route, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">
                        {route}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Competitive Edge */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                Why Choose Us
              </p>
              <h2 className="text-3xl font-bold text-foreground">
                Our Competitive Edge
              </h2>
              <p className="mt-2 text-lg italic text-primary">
                "Efficiency is not an option; it is our standard."
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {advantage.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Fleet & Technology Section */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/truck-fleet.jpg"
                  alt="AURA EXPRESS - Mercedes-Benz Actros and Beiben Prime Movers"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                  Our Fleet & Technology
                </p>
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Built for East African Terrain
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Our operations utilize industry-leading Mercedes-Benz Actros
                  and Beiben prime movers, optimized for heavy-duty regional
                  terrain. Every shipment is monitored via Real-Time GPS
                  Tracking and the Electronic Cargo Tracking System (RECTS) for
                  maximum security.
                </p>

                <div className="space-y-4">
                  {fleetAdvantages.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Button className="mt-8" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Preview */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-border bg-card">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To provide transparent, efficient, and safe logistics
                    solutions that empower businesses across the East African
                    Community.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                    <Globe className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    Our Vision 2030
                  </h3>
                  <p className="text-muted-foreground">
                    To become the leading digital-first logistics integrator in
                    Africa, known for speed, reliability, and integrity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Ready to Partner With Us?
              </h2>
              <p className="mb-8 max-w-2xl text-white/90">
                Join thousands of businesses that trust AURA EXPRESS AFRICA LTD.
                for their international procurement and logistics needs across
                East Africa. From Mombasa to Kampala, Kigali to Juba - we
                deliver.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-primary text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+254 736 758 613</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>auraexpressafrica@gmail.com</span>
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
