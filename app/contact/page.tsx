"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Check,
  Loader2,
  MessageSquare,
  Building2,
  Navigation,
} from "lucide-react";

// Dynamic import for Map component to avoid SSR issues with Leaflet
const Map = dynamic(() => import("@/components/map").then((mod) => mod.Map), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] items-center justify-center bg-muted">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  ),
});

// Majengo, Mombasa coordinates
const OFFICE_LOCATION: [number, number] = [-4.0435, 39.6682];

const contactInfo = [
  {
    icon: Building2,
    title: "Head Office",
    details: ["Majengo Area", "Mombasa, Kenya"],
    highlight: true,
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 41 234 5678", "+254 700 123 456"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@auraexpress.co.ke", "quotes@auraexpress.co.ke"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      "Mon - Fri: 7:00 AM - 6:00 PM",
      "Sat: 8:00 AM - 2:00 PM",
      "Sun: Closed",
    ],
  },
];

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const openInMaps = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${OFFICE_LOCATION[0]},${OFFICE_LOCATION[1]}`,
      "_blank",
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/images/fleet-container-truck.jpeg"
              alt="AURA Express Fleet"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
                Contact Us
              </p>
              <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                Get in Touch
              </h1>
              <p className="text-lg text-white/80">
                Have questions about our logistics services? Need a quote for
                your shipment? Our team is ready to assist you with all your
                freight needs across East Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className={`border-border transition-shadow hover:shadow-md ${item.highlight ? "border-primary" : ""}`}
                >
                  <CardContent className="p-6">
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center ${item.highlight ? "bg-primary" : "bg-muted"}`}
                    >
                      <item.icon
                        className={`h-6 w-6 ${item.highlight ? "text-white" : "text-primary"}`}
                      />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map and Form Section */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Map */}
              <div>
                <div className="mb-6">
                  <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                    Our Location
                  </p>
                  <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
                    Visit Our Office
                  </h2>
                  <p className="text-muted-foreground">
                    Strategically located in Majengo, Mombasa - close to the
                    port and major transport routes.
                  </p>
                </div>

                <Card className="overflow-hidden border-border">
                  <div className="h-[400px]">
                    <Map
                      center={OFFICE_LOCATION}
                      zoom={15}
                      markerPosition={OFFICE_LOCATION}
                      markerTitle="AURA EXPRESS AFRICA LTD"
                      markerDescription="Majengo, Mombasa, Kenya"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">
                            Majengo, Mombasa
                          </p>
                          <p className="text-sm text-muted-foreground">Kenya</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={openInMaps}>
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <div className="mb-6">
                  <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                    Send a Message
                  </p>
                  <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
                    Contact Form
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will get back to you
                    within 24 hours.
                  </p>
                </div>

                <Card className="border-border">
                  <CardContent className="p-6">
                    {submitted ? (
                      <div className="flex flex-col items-center py-12 text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-foreground">
                          Message Sent Successfully
                        </h3>
                        <p className="mb-2 text-muted-foreground">
                          Thank you for reaching out. Our team will respond
                          within 24 hours.
                        </p>
                        <p className="mb-6 text-sm text-muted-foreground">
                          A confirmation email has been sent to your email
                          address.
                        </p>
                        <Button
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              full_name: "",
                              email: "",
                              phone: "",
                              subject: "",
                              message: "",
                            });
                          }}
                          variant="outline"
                        >
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600">
                            {error}
                          </div>
                        )}

                        <div className="space-y-2">
                          <Label htmlFor="full_name">Full Name *</Label>
                          <Input
                            id="full_name"
                            placeholder="Enter your full name"
                            required
                            value={formData.full_name}
                            onChange={(e) =>
                              handleChange("full_name", e.target.value)
                            }
                            className="h-11"
                          />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="you@example.com"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                handleChange("email", e.target.value)
                              }
                              className="h-11"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+254 7XX XXX XXX"
                              value={formData.phone}
                              onChange={(e) =>
                                handleChange("phone", e.target.value)
                              }
                              className="h-11"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            placeholder="What is this regarding?"
                            value={formData.subject}
                            onChange={(e) =>
                              handleChange("subject", e.target.value)
                            }
                            className="h-11"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your logistics requirements or any questions you have..."
                            rows={5}
                            required
                            value={formData.message}
                            onChange={(e) =>
                              handleChange("message", e.target.value)
                            }
                            className="resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          className="h-11 w-full"
                          size="lg"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending Message...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                          By submitting this form, you agree to our privacy
                          policy.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-primary">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Need a Quote for Your Shipment?
                </h3>
                <p className="mt-1 text-white/80">
                  Get a detailed quote for your cargo - Road, Sea, or Air.
                </p>
              </div>
              <Button variant="secondary" size="lg" asChild>
                <a href="/quote">Request Quote</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
