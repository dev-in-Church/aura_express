export interface Shipment {
  id: string
  trackingNumber: string
  status: "pending" | "in_transit" | "out_for_delivery" | "delivered" | "delayed"
  origin: string
  destination: string
  estimatedDelivery: string
  currentLocation: string
  weight: string
  service: string
  sender: string
  recipient: string
  timeline: {
    status: string
    location: string
    timestamp: string
    completed: boolean
  }[]
}

export interface Service {
  id: string
  name: string
  description: string
  features: string[]
}

export const mockShipments: Shipment[] = [
  {
    id: "1",
    trackingNumber: "AEA-2026-001234",
    status: "in_transit",
    origin: "Mombasa, Kenya",
    destination: "Nairobi, Kenya",
    estimatedDelivery: "May 4, 2026",
    currentLocation: "Voi, Kenya",
    weight: "2,500 kg",
    service: "Standard Freight",
    sender: "Coastal Traders Ltd",
    recipient: "Nairobi Supplies Co",
    timeline: [
      { status: "Package Received", location: "Mombasa, Kenya", timestamp: "May 1, 2026 - 09:00 AM", completed: true },
      { status: "Departed Origin", location: "Mombasa Hub", timestamp: "May 1, 2026 - 02:30 PM", completed: true },
      { status: "In Transit", location: "Voi, Kenya", timestamp: "May 2, 2026 - 08:15 AM", completed: true },
      { status: "Arrived at Destination Hub", location: "Nairobi, Kenya", timestamp: "Pending", completed: false },
      { status: "Out for Delivery", location: "Nairobi, Kenya", timestamp: "Pending", completed: false },
      { status: "Delivered", location: "Nairobi, Kenya", timestamp: "Pending", completed: false },
    ],
  },
  {
    id: "2",
    trackingNumber: "AEA-2026-001235",
    status: "delivered",
    origin: "Mombasa, Kenya",
    destination: "Kampala, Uganda",
    estimatedDelivery: "April 30, 2026",
    currentLocation: "Kampala, Uganda",
    weight: "8,000 kg",
    service: "Cross-Border Freight",
    sender: "Kenya Exporters",
    recipient: "Uganda Distributors Ltd",
    timeline: [
      { status: "Package Received", location: "Mombasa, Kenya", timestamp: "April 25, 2026 - 10:00 AM", completed: true },
      { status: "Departed Origin", location: "Mombasa Hub", timestamp: "April 26, 2026 - 06:00 AM", completed: true },
      { status: "Border Crossing", location: "Malaba Border", timestamp: "April 27, 2026 - 02:00 PM", completed: true },
      { status: "Customs Clearance", location: "Malaba Border", timestamp: "April 28, 2026 - 09:00 AM", completed: true },
      { status: "In Transit", location: "Jinja, Uganda", timestamp: "April 29, 2026 - 11:00 AM", completed: true },
      { status: "Delivered", location: "Kampala, Uganda", timestamp: "April 30, 2026 - 04:30 PM", completed: true },
    ],
  },
  {
    id: "3",
    trackingNumber: "AEA-2026-001236",
    status: "pending",
    origin: "Mombasa, Kenya",
    destination: "Kigali, Rwanda",
    estimatedDelivery: "May 10, 2026",
    currentLocation: "Mombasa, Kenya",
    weight: "12,000 kg",
    service: "Heavy Freight",
    sender: "Port Logistics",
    recipient: "Rwanda Industries",
    timeline: [
      { status: "Package Received", location: "Mombasa, Kenya", timestamp: "May 2, 2026 - 11:00 AM", completed: true },
      { status: "Processing", location: "Mombasa Hub", timestamp: "Pending", completed: false },
      { status: "Departed Origin", location: "Mombasa Hub", timestamp: "Pending", completed: false },
      { status: "Border Crossing", location: "Gatuna Border", timestamp: "Pending", completed: false },
      { status: "In Transit", location: "Rwanda", timestamp: "Pending", completed: false },
      { status: "Delivered", location: "Kigali, Rwanda", timestamp: "Pending", completed: false },
    ],
  },
]

export const mockServices: Service[] = [
  {
    id: "1",
    name: "Standard Freight",
    description: "Cost-effective road transportation for general cargo across East Africa with scheduled departures.",
    features: ["Scheduled departures", "Cost-effective rates", "Full truckload options", "GPS tracking"],
  },
  {
    id: "2",
    name: "Express Freight",
    description: "Priority trucking for time-sensitive cargo with dedicated vehicles and faster transit times.",
    features: ["Dedicated trucks", "Priority handling", "Faster transit", "Real-time updates"],
  },
  {
    id: "3",
    name: "Cross-Border Freight",
    description: "Seamless trucking across Kenya, Uganda, Tanzania, Rwanda, and beyond with customs handling.",
    features: ["Multi-country routes", "Customs clearance", "Border documentation", "Transit permits"],
  },
  {
    id: "4",
    name: "Heavy Freight",
    description: "Specialized transport for heavy machinery, construction equipment, and oversized cargo.",
    features: ["Flatbed trucks", "Heavy machinery", "Oversized cargo", "Special permits"],
  },
  {
    id: "5",
    name: "Warehousing",
    description: "Secure storage facilities in Mombasa with inventory management and distribution services.",
    features: ["24/7 security", "Inventory management", "Distribution support", "Flexible storage"],
  },
  {
    id: "6",
    name: "Last Mile Delivery",
    description: "Final delivery to your customer's doorstep with proof of delivery and real-time tracking.",
    features: ["Door-to-door", "Proof of delivery", "SMS notifications", "Flexible scheduling"],
  },
]

export const stats = [
  { label: "Deliveries Completed", value: "50,000+" },
  { label: "Countries Covered", value: "8" },
  { label: "Trucks in Fleet", value: "120+" },
  { label: "Years on the Road", value: "12" },
]
