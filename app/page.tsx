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
} from "lucide-react";
import { stats, mockServices } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative max-h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-truck.jpg"
              alt="AURA EXPRESS cargo truck"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2">
                <Truck className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-white">
                  Road Freight Specialists
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-balance">
                  Reliable Trucking Across East Africa
                </span>
              </h1>

              <p className="mb-8 text-lg text-white/80">
                From Mombasa to Kampala, Nairobi to Kigali. We move your cargo
                safely and on time with our fleet of modern trucks and
                experienced drivers.
              </p>

              {/* Key Points */}
              <div className="mb-10 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white">
                    Real-time GPS tracking
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white">
                    Cross-border expertise
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white">120+ truck fleet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white">Customs clearance</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/track">
                    Track Shipment
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

            {/* Tracking Card */}
            {/* <Card className="mt-12 max-w-xl border-0 bg-white">
              <CardContent className="p-6">
                <h2 className="mb-4 text-lg font-semibold text-foreground">
                  Track Your Shipment
                </h2>
                <form className="flex gap-3" action="/track">
                  <Input
                    name="tracking"
                    placeholder="Enter tracking number (e.g. AEA-2026-001234)"
                    className="flex-1"
                  />
                  <Button type="submit">
                    <Search className="mr-2 h-4 w-4" />
                    Track
                  </Button>
                </form>
              </CardContent>
            </Card> */}
          </div>
        </section>

        {/* Stats Bar */}
        {/* <section className="border-y border-border bg-neutral-900">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Services Preview */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                  What We Offer
                </p>
                <h2 className="text-3xl font-bold text-foreground">
                  Our Services
                </h2>
              </div>
              <Link
                href="/services"
                className="hidden text-sm font-medium text-primary hover:underline sm:block"
              >
                View All Services
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mockServices.slice(0, 6).map((service) => (
                <Card
                  key={service.id}
                  className="border-border transition-colors hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center bg-primary/10">
                      {service.name.includes("Freight") && (
                        <Truck className="h-6 w-6 text-primary" />
                      )}
                      {service.name === "Warehousing" && (
                        <Package className="h-6 w-6 text-primary" />
                      )}
                      {service.name === "Last Mile Delivery" && (
                        <Clock className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Link
              href="/services"
              className="mt-8 block text-center text-sm font-medium text-primary hover:underline sm:hidden"
            >
              View All Services
            </Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                Why Choose Us
              </p>
              <h2 className="text-3xl font-bold text-foreground">
                The AURA Advantage
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-primary">
                  <Truck className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  Modern Fleet
                </h3>
                <p className="text-sm text-muted-foreground">
                  120+ well-maintained trucks ready for any cargo
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-primary">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  GPS Tracking
                </h3>
                <p className="text-sm text-muted-foreground">
                  Real-time location updates for all shipments
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-primary">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  Fully Insured
                </h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive coverage for your peace of mind
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-primary">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  On-Time Delivery
                </h3>
                <p className="text-sm text-muted-foreground">
                  98% on-time delivery rate across all routes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/truck-fleet.jpg"
                  alt="AURA EXPRESS truck fleet"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                  Our Fleet
                </p>
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Built for East African Roads
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Our fleet ranges from light commercial vehicles for urban
                  deliveries to heavy-duty trucks for industrial cargo. Every
                  vehicle is GPS-tracked and maintained to handle the diverse
                  terrain across Kenya, Uganda, Tanzania, and Rwanda.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-foreground">
                      Light trucks (1-5 tons)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-foreground">
                      Medium trucks (5-15 tons)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-foreground">
                      Heavy trucks (15-30 tons)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-foreground">
                      Flatbed and specialized carriers
                    </span>
                  </li>
                </ul>

                <Button className="mt-8" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Ready to Ship?
              </h2>
              <p className="mb-8 max-w-md text-white/80">
                Contact our team to discuss your freight requirements. We
                operate across Kenya, Uganda, Tanzania, Rwanda, and beyond.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-primary text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <Link href="/track">Track Shipment</Link>
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
