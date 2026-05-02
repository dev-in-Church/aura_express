"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import { MapPin, Phone, Mail, Clock, Check } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Moi Avenue, Mombasa", "P.O. Box 12345", "Mombasa, Kenya"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 41 234 5678", "+254 700 123 456"],
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
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to an API
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Contact</p>
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Get in Touch</h1>
            <p className="max-w-2xl text-muted-foreground">
              Have questions about our services? Need a quote? Our team is ready to help.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <Card className="border-border bg-background">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="flex flex-col items-center py-8 text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center bg-green-500">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">Message Sent</h3>
                    <p className="mb-4 text-muted-foreground">
                      Thank you for reaching out. Our team will respond within 24 hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="+254 700 123 456" />
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
          </div>
        </section>

        {/* Office Location */}
        <section>
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Our Location</p>
              <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">Visit Our Office</h2>
              <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
                Our headquarters is strategically located in Mombasa, Kenya, providing easy 
                access to the port and major transportation routes.
              </p>
              <Card className="border-border bg-card">
                <CardContent className="flex flex-col items-center justify-center p-12">
                  <MapPin className="mb-4 h-10 w-10 text-primary" />
                  <p className="text-lg font-semibold text-foreground">AURA EXPRESS AFRICA LTD</p>
                  <p className="text-muted-foreground">Moi Avenue, Mombasa</p>
                  <p className="text-muted-foreground">P.O. Box 12345, Mombasa, Kenya</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
