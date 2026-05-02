"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Package,
  MapPin,
  Calendar,
  Truck,
  Check,
  Clock,
  AlertCircle,
} from "lucide-react";
import { mockShipments, type Shipment } from "@/lib/mock-data";

const statusConfig = {
  pending: { label: "Pending", color: "bg-yellow-500", icon: Clock },
  in_transit: { label: "In Transit", color: "bg-blue-500", icon: Truck },
  out_for_delivery: {
    label: "Out for Delivery",
    color: "bg-primary",
    icon: Truck,
  },
  delivered: { label: "Delivered", color: "bg-green-500", icon: Check },
  delayed: { label: "Delayed", color: "bg-red-500", icon: AlertCircle },
};

export default function TrackPage() {
  const searchParams = useSearchParams();
  const initialTracking = searchParams.get("tracking") || "";
  const [trackingNumber, setTrackingNumber] = useState(initialTracking);
  const [shipment, setShipment] = useState<Shipment | null>(
    initialTracking
      ? mockShipments.find((s) => s.trackingNumber === initialTracking) || null
      : null,
  );
  const [error, setError] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const found = mockShipments.find(
      (s) => s.trackingNumber.toLowerCase() === trackingNumber.toLowerCase(),
    );

    if (found) {
      setShipment(found);
    } else {
      setShipment(null);
      setError("Shipment not found. Please check your tracking number.");
    }
  };

  const status = shipment ? statusConfig[shipment.status] : null;
  const StatusIcon = status?.icon || Package;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Track
            </p>
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Track Your Shipment
            </h1>
            <p className="max-w-2xl text-muted-foreground">
              Enter your tracking number to get real-time updates on your
              shipment status.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
            <form onSubmit={handleSearch} className="flex gap-3">
              <Input
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number (e.g. AEA-2026-001234)"
                className="flex-1"
              />
              <Button type="submit">
                <Search className="mr-2 h-4 w-4" />
                Track
              </Button>
            </form>
            {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
            <p className="mt-3 text-xs text-muted-foreground">
              Try: AEA-2026-001234, AEA-2026-001235, or AEA-2026-001236
            </p>
          </div>
        </section>

        {/* Results Section */}
        {shipment && (
          <section className="border-b border-border">
            <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
              {/* Status Banner */}
              <Card className="mb-6 border-border bg-card">
                <CardContent className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center ${status?.color} text-white`}
                    >
                      <StatusIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="text-lg font-semibold text-foreground">
                        {status?.label}
                      </p>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="text-sm text-muted-foreground">
                      Tracking Number
                    </p>
                    <p className="font-mono text-lg font-semibold text-foreground">
                      {shipment.trackingNumber}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Shipment Details */}
              <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="border-border bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">From</p>
                        <p className="text-sm font-medium text-foreground">
                          {shipment.origin}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">To</p>
                        <p className="text-sm font-medium text-foreground">
                          {shipment.destination}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Est. Delivery
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {shipment.estimatedDelivery}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Package className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Service</p>
                        <p className="text-sm font-medium text-foreground">
                          {shipment.service}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Shipment Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    {shipment.timeline.map((event, index) => (
                      <div
                        key={index}
                        className="relative flex gap-4 pb-6 last:pb-0"
                      >
                        {/* Timeline Line */}
                        {index < shipment.timeline.length - 1 && (
                          <div
                            className={`absolute left-3 top-6 h-full w-0.5 ${
                              event.completed ? "bg-primary" : "bg-border"
                            }`}
                          />
                        )}

                        {/* Timeline Dot */}
                        <div
                          className={`relative z-10 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                            event.completed ? "bg-primary" : "bg-muted"
                          }`}
                        >
                          {event.completed ? (
                            <Check className="h-3 w-3 text-primary-foreground" />
                          ) : (
                            <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                          )}
                        </div>

                        {/* Timeline Content */}
                        <div className="flex-1">
                          <p
                            className={`font-medium ${event.completed ? "text-foreground" : "text-muted-foreground"}`}
                          >
                            {event.status}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {event.location}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {event.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Card className="border-border bg-card">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground">Sender</p>
                    <p className="font-medium text-foreground">
                      {shipment.sender}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border bg-card">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground">Recipient</p>
                    <p className="font-medium text-foreground">
                      {shipment.recipient}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Empty State */}
        {!shipment && !error && (
          <section className="border-b border-border">
            <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 lg:px-8">
              <Package className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h2 className="mb-2 text-lg font-semibold text-foreground">
                No shipment selected
              </h2>
              <p className="text-muted-foreground">
                Enter a tracking number above to view shipment details and
                status.
              </p>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
