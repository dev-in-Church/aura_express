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
  Plane,
  Ship,
  Container,
} from "lucide-react";

// Real services based on company profile
const services = [
  {
    id: 1,
    name: "Road Freight",
    description:
      "Mercedes-Benz Actros & Beiben prime movers for regional and cross-border transport.",
    icon: Truck,
    image: "/images/fleet-truck-road.jpeg",
  },
  {
    id: 2,
    name: "Sea Freight",
    description:
      "Ocean cargo services through Mombasa and Lamu ports to international destinations.",
    icon: Ship,
    image: "/images/fleet-ship-port.jpeg",
  },
  {
    id: 3,
    name: "Air Freight",
    description:
      "Express air cargo through JKIA for time-sensitive shipments across Africa.",
    icon: Plane,
    image: "/images/fleet-air-cargo.jpeg",
  },
  {
    id: 4,
    name: "Heavy Haulage",
    description:
      "Specialized low-bed trailers for machinery, equipment, and oversized cargo.",
    icon: Container,
    image: "/images/fleet-heavy-haulage.jpeg",
  },
];

// Key routes served
const keyRoutes = [
  "Mombasa – Nairobi – Kampala (Uganda)",
  "Mombasa – Kigali (Rwanda)",
  "Mombasa – Juba (South Sudan)",
  "Mombasa – Goma/Lubumbashi (DRC)",
];

// Fleet gallery
const fleetGallery = [
  {
    src: "/images/fleet-truck-road.jpeg",
    alt: "AURA EXPRESS Mercedes truck on the road",
    title: "Road Freight",
  },
  {
    src: "/images/fleet-ship-ocean.jpeg",
    alt: "AURA EXPRESS container ship",
    title: "Sea Freight",
  },
  {
    src: "/images/fleet-air-cargo.jpeg",
    alt: "AURA EXPRESS cargo plane at JKIA",
    title: "Air Freight",
  },
  {
    src: "/images/fleet-heavy-haulage.jpeg",
    alt: "AURA EXPRESS heavy haulage truck",
    title: "Heavy Haulage",
  },
  {
    src: "/images/fleet-container-truck.jpeg",
    alt: "AURA EXPRESS container transport",
    title: "Container Transport",
  },
  {
    src: "/images/fleet-ship-port.jpeg",
    alt: "AURA EXPRESS ship at Lamu port",
    title: "Port Operations",
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
        <section className="relative min-h-[600px] lg:min-h-[700px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-truck.png"
              alt="AURA EXPRESS AFRICA LTD - Premier Logistics Fleet"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2">
                <Globe className="h-4 w-4 text-primary" />
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
                solutions across the East African Northern Corridor - by Road,
                Sea, and Air.
              </p>

              {/* Key Points */}
              <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white">Road Freight</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white">Sea Freight</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white">Air Freight</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white">Heavy Haulage</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/quote">
                    Request Invoice
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-black"
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

        {/* Services with Images */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                  What We Offer
                </p>
                <h2 className="text-3xl font-bold text-foreground">
                  Multi-Modal Logistics Solutions
                </h2>
                <p className="mt-2 max-w-2xl text-muted-foreground">
                  From road to sea to air - we move your cargo through the most
                  efficient routes across Africa.
                </p>
              </div>
              <Link
                href="/services"
                className="hidden text-sm font-medium text-primary hover:underline sm:block"
              >
                View All Services
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.id}
                    className="group overflow-hidden border-border transition-all hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center bg-primary">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="mb-1 text-lg font-semibold text-foreground">
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
              View All Services
            </Link>
          </div>
        </section>

        {/* Fleet Gallery */}
        <section className="border-b border-border bg-neutral-900">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                Our Fleet
              </p>
              <h2 className="text-3xl font-bold text-white">
                Built for African Terrain
              </h2>
              <p className="mt-2 text-white/70">
                Mercedes-Benz Actros, Beiben prime movers, cargo aircraft, and
                container vessels
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {fleetGallery.map((item, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3">
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Routes */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                Our Network
              </p>
              <h2 className="text-3xl font-bold text-foreground">
                Dominating East Africa&apos;s Logistics Artery
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
                      <Route className="h-5 w-5 text-primary flex-shrink-0" />
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

        {/* Why Choose Us */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                Why Choose Us
              </p>
              <h2 className="text-3xl font-bold text-foreground">
                Our Competitive Edge
              </h2>
              <p className="mt-2 text-lg italic text-primary">
                &quot;Efficiency is not an option; it is our standard.&quot;
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-primary">
                      <Icon className="h-7 w-7 text-white" />
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

        {/* Fleet & Technology Section with Image */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/truck-fleet.png"
                  alt="AURA EXPRESS - Container transport truck"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                  Technology & Compliance
                </p>
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Real-Time Visibility & Security
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Every shipment is monitored via Real-Time GPS Tracking and the
                  Electronic Cargo Tracking System (RECTS) for maximum security.
                  Our operations are backed by comprehensive Goods-In-Transit
                  insurance.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">
                        Real-Time GPS Tracking & RECTS
                      </span>
                      <p className="text-sm text-muted-foreground">
                        Electronic Cargo Tracking System for maximum security
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">
                        Comprehensive GIT Insurance
                      </span>
                      <p className="text-sm text-muted-foreground">
                        Goods-In-Transit insurance covering all cargo
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">
                        Professional Vetted Drivers
                      </span>
                      <p className="text-sm text-muted-foreground">
                        Experienced drivers trained in cross-border protocols
                      </p>
                    </div>
                  </li>
                </ul>

                <Button className="mt-8" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-border">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center bg-primary/10 mx-auto">
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
              <Card className="border-border">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center bg-primary/10 mx-auto">
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
                  <Link href="/quote">Request Invoice</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
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
