"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

const countries = [
  "Kenya",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Burundi",
  "DR Congo",
  "South Sudan",
  "Ethiopia",
];

const cargoTypes = [
  "General Cargo",
  "Containerized",
  "Bulk Cargo",
  "Heavy Equipment",
  "Out of Gauge",
  "Perishable Goods",
  "Hazardous Materials",
];

const transportModes = [
  "Road Freight",
  "Sea Freight",
  "Air Freight",
  "Multi-Modal (Road + Sea)",
  "Multi-Modal (Road + Air)",
];

const routes = [
  "Mombasa - Nairobi",
  "Mombasa - Kampala",
  "Mombasa - Kigali",
  "Nairobi - Kampala",
  "Nairobi - Dar es Salaam",
  "Cross-Border (specify below)",
  "Other (specify below)",
];

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex flex-1 items-center justify-center px-4 py-20">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-4 text-2xl font-bold text-foreground">
              Request Submitted
            </h1>
            <p className="mb-8 text-muted-foreground">
              Thank you for your quote request. Our team will review your cargo
              details and get back to you within 24 hours.
            </p>
            <Button onClick={() => setSubmitted(false)}>
              Submit Another Request
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-foreground">
              Request a Quote
            </h1>
            <p className="mt-2 text-muted-foreground">
              Fill in your cargo details and we&apos;ll provide you with a
              competitive quote.
            </p>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-12">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Cargo Details Section */}
              <div>
                <h2 className="mb-6 text-xl font-semibold text-primary">
                  Cargo Details
                </h2>

                <div className="space-y-6">
                  <div>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select Origin Country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem
                            key={country}
                            value={country.toLowerCase().replace(" ", "-")}
                          >
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Select the country of origin
                    </p>
                  </div>

                  <div>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select Cargo Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {cargoTypes.map((type) => (
                          <SelectItem
                            key={type}
                            value={type.toLowerCase().replace(" ", "-")}
                          >
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Cargo Type
                    </p>
                  </div>

                  <div>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select Transport Mode" />
                      </SelectTrigger>
                      <SelectContent>
                        {transportModes.map((mode) => (
                          <SelectItem
                            key={mode}
                            value={mode.toLowerCase().replace(/ /g, "-")}
                          >
                            {mode}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Preferred transport mode (Road, Sea, Air, or Multi-Modal)
                    </p>
                  </div>

                  <div>
                    <Input
                      type="text"
                      placeholder="Cargo Quantity"
                      className="h-12"
                    />
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Provide the total count of cargo units
                    </p>
                  </div>

                  <div>
                    <Textarea
                      placeholder="Cargo Dimensions"
                      className="min-h-[100px] resize-none"
                    />
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Please enter cargo dimensions in meters (L x W x H)
                    </p>
                  </div>

                  <div>
                    <Input
                      type="text"
                      placeholder="Cargo Weight"
                      className="h-12"
                    />
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Indicate cargo weight in tonnes
                    </p>
                  </div>
                </div>
              </div>

              {/* Route Details Section */}
              <div>
                <h2 className="mb-6 text-xl font-semibold text-primary">
                  Route Details
                </h2>

                <div className="space-y-6">
                  <div>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select Cargo Route" />
                      </SelectTrigger>
                      <SelectContent>
                        {routes.map((route) => (
                          <SelectItem
                            key={route}
                            value={route.toLowerCase().replace(/ /g, "-")}
                          >
                            {route}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Indicate your Cargo Route
                    </p>
                  </div>

                  <div>
                    <Textarea
                      placeholder="Cargo Route Details"
                      className="min-h-[100px] resize-none"
                    />
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Indicate any extra Cargo Route details
                    </p>
                  </div>

                  <div>
                    <Input
                      type="text"
                      placeholder="Cargo Delivery Country"
                      className="h-12"
                    />
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Indicate the destination country for the cargo
                    </p>
                  </div>

                  <div>
                    <Input
                      type="text"
                      placeholder="Final Destination"
                      className="h-12"
                    />
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Indicate exact location of delivery
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details Section */}
              <div>
                <h2 className="mb-6 text-xl font-semibold text-primary">
                  Contact Details
                </h2>

                <div className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      placeholder="Your Message to us"
                      className="min-h-[120px] resize-none"
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                SEND REQUEST
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
