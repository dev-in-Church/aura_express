"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Check, Navigation } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Majengo, Mombasa", "P.O. Box 12345", "Mombasa, Kenya"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 736 758 613", "+254 736 758 613"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@auraexpress.co.ke", "support@auraexpress.co.ke"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"],
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    setSubmitted(true);
  };

  // Google Maps embed URL for Majengo, Mombasa
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15917.679520186621!2d39.657841!3d-4.043476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012f6b6d8e6b7%3A0x8b9b9b9b9b9b9b9b!2sMajengo%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske";

  // Alternative: OpenStreetMap static image with marker
  const staticMapUrl =
    "https://staticmap.openstreetmap.de/staticmap.php?center=-4.043476,39.657841&zoom=15&size=800x400&maptype=mapnik&markers=-4.043476,39.657841,lightred1";

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Contact
            </p>
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Get in Touch
            </h1>
            <p className="max-w-2xl text-muted-foreground">
              Have questions about our services? Need a quote? Our team is ready
              to help.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="border-border bg-card">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 font-semibold text-foreground">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form and Map Side by Side */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="flex flex-col items-center py-8 text-center">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                        <Check className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        Message Sent
                      </h3>
                      <p className="mb-4 text-muted-foreground">
                        Thank you for reaching out. Our team will respond within
                        24 hours.
                      </p>
                      <Button
                        onClick={() => setSubmitted(false)}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="Billy" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Aura" required />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="billy@example.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+254 736 758 613"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input id="company" placeholder="Your company name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your logistics needs..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Map and Location Info */}
              <div className="space-y-6">
                <Card className="border-border bg-card overflow-hidden">
                  <CardHeader>
                    <CardTitle>Find Us in Majengo, Mombasa</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    {/* Interactive Google Map */}
                    <div
                      className="relative w-full"
                      style={{ height: "300px" }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15917.679520186621!2d39.647841!3d-4.053476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012f6b6d8e6b7%3A0x8b9b9b9b9b9b9b9b!2sMajengo%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="AURA EXPRESS Location - Majengo, Mombasa"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Navigation className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            AURA EXPRESS AFRICA LTD
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Majengo, Mombasa
                            <br />
                            P.O. Box 12345, Mombasa, Kenya
                          </p>
                          <Button
                            variant="link"
                            className="mt-2 h-auto p-0 text-primary"
                            asChild
                          >
                            <a
                              href="https://maps.google.com/?q=Majengo+Mombasa+Kenya"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Get Directions →
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact Card */}
                <Card className="border-border bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="mb-3 font-semibold text-foreground">
                      Need Immediate Assistance?
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      For urgent inquiries, please call our customer support
                      line:
                    </p>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-lg font-semibold text-foreground">
                        +254 736 758 613
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-foreground">
                        auraexpressafrica@gmail.com
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location - Map Only Section */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                Our Location
              </p>
              <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                Strategically Located in Majengo, Mombasa
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                Our headquarters is strategically located in Majengo, Mombasa,
                providing easy access to the port and major transportation
                routes across East Africa.
              </p>

              {/* Full-width Map */}
              <Card className="border-border bg-background overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative w-full" style={{ height: "400px" }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15917.679520186621!2d39.647841!3d-4.053476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012f6b6d8e6b7%3A0x8b9b9b9b9b9b9b9b!2sMajengo%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AURA EXPRESS Office Location Map - Majengo, Mombasa"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <MapPin className="mx-auto mb-3 h-8 w-8 text-primary" />
                    <p className="text-lg font-semibold text-foreground">
                      AURA EXPRESS AFRICA LTD
                    </p>
                    <p className="text-muted-foreground">
                      Majengo, Mombasa, Kenya
                    </p>
                    <p className="text-sm text-muted-foreground">
                      P.O. Box 12345, Mombasa
                    </p>
                    <Button variant="outline" className="mt-4" asChild>
                      <a
                        href="https://maps.google.com/?q=Majengo+Mombasa+Kenya"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
