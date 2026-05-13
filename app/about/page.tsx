import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  Truck,
  Globe,
  Shield,
  TrendingUp,
  Package,
  MapPin,
  Clock,
  Users,
  Award,
  Target,
  Eye,
  User,
  UserCircle,
} from "lucide-react";
import { ProfileImage } from "@/components/profile-image";

const coreServices = [
  {
    icon: Package,
    title: "International Freight Forwarding",
    description:
      "Expert handling of containerized and loose cargo from the Port of Mombasa to the hinterlands of East Africa.",
  },
  {
    icon: Truck,
    title: "Regional Transit Excellence",
    description:
      "Specialized long-haul routes connecting Kenya to Uganda, Rwanda, South Sudan, and the DRC.",
  },
  {
    icon: Shield,
    title: "Procurement Management",
    description:
      "Strategic sourcing and documentation audits ensuring 100% compliance with border and customs regulations.",
  },
  {
    icon: TrendingUp,
    title: "Asset-Light Supply Chain Solutions",
    description:
      "Leveraging a vast network of vetted partner carriers to provide scalable capacity for large-scale contracts.",
  },
];

const keyRoutes = [
  "Mombasa – Nairobi – Kampala (Uganda)",
  "Mombasa – Kigali (Rwanda)",
  "Mombasa – Juba (South Sudan)",
  "Mombasa – Goma/Lubumbashi (DRC)",
];

const competitiveAdvantages = [
  "Fleet Excellence: Mercedes-Benz Actros and Beiben prime movers optimized for heavy-duty regional terrain",
  "Technology-Driven: Real-Time GPS Tracking and Electronic Cargo Tracking System (RECTS)",
  "Safety & Insurance: Comprehensive Goods-In-Transit (GIT) insurance",
  "Procurement IQ: Expert handling of T1 Bonds, Certificates of Origin, and Customs Declarations",
];

const leadershipTeam = [
  {
    name: "Billy Aura",
    title: "Managing Director",
    role: "Strategic Vision & Operations Oversight",
    description:
      "Founder with specialized background in Procurement and Supply Chain Management. Spearheaded the 'Asset-Light' strategy, transforming complex logistics challenges into streamlined, high-efficiency operations across the Northern Corridor.",
    image: "/images/aura.jpeg",
    fallbackInitials: "BA",
  },
  {
    name: "Enos Otemo Ongala",
    title: "International Procurement & Logistics Field Manager",
    role: "Global Sourcing & On-Ground Operations",
    description:
      "Manages the critical intersection of International Procurement and Field Logistics. Oversees vetting of partner carriers, port operations in Mombasa, and cross-border movement of transit goods with deep expertise in customs protocols.",
    image: "/images/enos.jpeg",
    fallbackInitials: "EO",
  },
  {
    name: "Hussein Juma Sadikin",
    title: "Marketing & Management Consultant",
    role: "Brand Growth & Business Strategy",
    description:
      "Lead consultant for Marketing and Corporate Management. Positions Aura Express as a premium brand within East African logistics, developing strategic partnerships and navigating complex contract negotiations.",
    image: "/images/sadikin.jpeg",
    fallbackInitials: "HJ",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header - Hero Section */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Company Profile
            </p>
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              AURA EXPRESS AFRICA LTD.
            </h1>
            <p className="max-w-3xl text-lg font-semibold text-primary">
              "Your Reliable Partner in International Procurement, Freight, and
              Logistics."
            </p>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Premier logistics and procurement firm headquartered in Mombasa,
              Kenya. We specialize in seamless, high-capacity transport
              solutions across the East African Northern Corridor, bridging the
              gap between global supply chains and regional delivery.
            </p>
          </div>
        </section>

        {/* Core Services */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                What We Do
              </p>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Our Core Services
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreServices.map((service, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Network - Key Routes */}
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
                  We provide reliable transit on the following key routes:
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
                  <CardContent className="p-8">
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      Strategic Location
                    </h3>
                    <p className="text-muted-foreground">
                      Headquartered at the Port of Mombasa, East Africa's
                      busiest gateway, giving us unparalleled access to regional
                      trade routes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Edge */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                Why Choose Us
              </p>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Our Competitive Edge
              </h2>
              <p className="mt-2 text-lg italic text-primary">
                "Efficiency is not an option; it is our standard."
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {competitiveAdvantages.map((advantage, index) => {
                const icon =
                  index === 0
                    ? Truck
                    : index === 1
                      ? Globe
                      : index === 2
                        ? Shield
                        : Award;
                return (
                  <Card key={index} className="border-border bg-card">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            {icon === Truck && <Truck className="h-5 w-5" />}
                            {icon === Globe && <Globe className="h-5 w-5" />}
                            {icon === Shield && <Shield className="h-5 w-5" />}
                            {icon === Award && <Award className="h-5 w-5" />}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{advantage}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-border bg-background">
                <CardContent className="p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Target className="h-6 w-6" />
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
              <Card className="border-border bg-background">
                <CardContent className="p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Eye className="h-6 w-6" />
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

        {/* Executive Leadership - With Profile Images */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                Leadership
              </p>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Executive Leadership Profile
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {leadershipTeam.map((leader, index) => (
                <Card
                  key={index}
                  className="border-border bg-card overflow-hidden"
                >
                  <CardContent className="p-6 text-center">
                    {/* Profile Image */}
                    <div className="mb-4 flex justify-center">
                      <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-primary/20 bg-muted">
                        <ProfileImage
                          src={leader.image}
                          alt={`${leader.name} - ${leader.title}`}
                          fallbackInitials={leader.fallbackInitials}
                        />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground">
                      {leader.name}
                    </h3>
                    <p className="mb-1 text-sm font-semibold text-primary">
                      {leader.title}
                    </p>
                    <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                      {leader.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {leader.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Partnership */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                  Ready to Partner With Us?
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Join the growing list of businesses that trust AURA EXPRESS
                  AFRICA LTD. for their international procurement and logistics
                  needs across East Africa.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link href="/contact">Contact Us Today</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-3">
                {[
                  "100% border compliance guaranteed",
                  "Real-time GPS cargo tracking",
                  "Comprehensive GIT insurance",
                  "Professional vetted drivers",
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
