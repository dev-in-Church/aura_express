export interface Shipment {
  id: string;
  trackingNumber: string;
  status:
    | "pending"
    | "in_transit"
    | "out_for_delivery"
    | "delivered"
    | "delayed";
  origin: string;
  destination: string;
  estimatedDelivery: string;
  currentLocation: string;
  weight: string;
  service: string;
  sender: string;
  recipient: string;
  timeline: {
    status: string;
    location: string;
    timestamp: string;
    completed: boolean;
  }[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  category: "road" | "sea" | "air" | "support";
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
    service: "Road Freight",
    sender: "Coastal Traders Ltd",
    recipient: "Nairobi Supplies Co",
    timeline: [
      {
        status: "Package Received",
        location: "Mombasa, Kenya",
        timestamp: "May 1, 2026 - 09:00 AM",
        completed: true,
      },
      {
        status: "Departed Origin",
        location: "Mombasa Hub",
        timestamp: "May 1, 2026 - 02:30 PM",
        completed: true,
      },
      {
        status: "In Transit",
        location: "Voi, Kenya",
        timestamp: "May 2, 2026 - 08:15 AM",
        completed: true,
      },
      {
        status: "Arrived at Destination Hub",
        location: "Nairobi, Kenya",
        timestamp: "Pending",
        completed: false,
      },
      {
        status: "Out for Delivery",
        location: "Nairobi, Kenya",
        timestamp: "Pending",
        completed: false,
      },
      {
        status: "Delivered",
        location: "Nairobi, Kenya",
        timestamp: "Pending",
        completed: false,
      },
    ],
  },
  {
    id: "2",
    trackingNumber: "AEA-2026-001235",
    status: "delivered",
    origin: "Mombasa Port, Kenya",
    destination: "Kampala, Uganda",
    estimatedDelivery: "April 30, 2026",
    currentLocation: "Kampala, Uganda",
    weight: "8,000 kg",
    service: "Sea + Road Freight",
    sender: "Kenya Exporters",
    recipient: "Uganda Distributors Ltd",
    timeline: [
      {
        status: "Cargo Received at Port",
        location: "Mombasa Port, Kenya",
        timestamp: "April 25, 2026 - 10:00 AM",
        completed: true,
      },
      {
        status: "Customs Cleared",
        location: "Mombasa Port",
        timestamp: "April 26, 2026 - 06:00 AM",
        completed: true,
      },
      {
        status: "Loaded for Road Transit",
        location: "Mombasa Hub",
        timestamp: "April 26, 2026 - 02:00 PM",
        completed: true,
      },
      {
        status: "Border Crossing",
        location: "Malaba Border",
        timestamp: "April 28, 2026 - 09:00 AM",
        completed: true,
      },
      {
        status: "In Transit",
        location: "Jinja, Uganda",
        timestamp: "April 29, 2026 - 11:00 AM",
        completed: true,
      },
      {
        status: "Delivered",
        location: "Kampala, Uganda",
        timestamp: "April 30, 2026 - 04:30 PM",
        completed: true,
      },
    ],
  },
  {
    id: "3",
    trackingNumber: "AEA-2026-001236",
    status: "pending",
    origin: "JKIA, Nairobi",
    destination: "Kigali, Rwanda",
    estimatedDelivery: "May 5, 2026",
    currentLocation: "JKIA, Nairobi",
    weight: "500 kg",
    service: "Air Freight",
    sender: "Tech Solutions Ltd",
    recipient: "Rwanda Electronics",
    timeline: [
      {
        status: "Cargo Received",
        location: "JKIA, Nairobi",
        timestamp: "May 2, 2026 - 11:00 AM",
        completed: true,
      },
      {
        status: "Customs Processing",
        location: "JKIA Cargo Terminal",
        timestamp: "Pending",
        completed: false,
      },
      {
        status: "Flight Departed",
        location: "JKIA, Nairobi",
        timestamp: "Pending",
        completed: false,
      },
      {
        status: "Arrived at Destination",
        location: "Kigali Airport",
        timestamp: "Pending",
        completed: false,
      },
      {
        status: "Customs Cleared",
        location: "Kigali, Rwanda",
        timestamp: "Pending",
        completed: false,
      },
      {
        status: "Delivered",
        location: "Kigali, Rwanda",
        timestamp: "Pending",
        completed: false,
      },
    ],
  },
];

export const mockServices: Service[] = [
  // Road Freight Services
  {
    id: "1",
    name: "Road Freight",
    description:
      "Mercedes-Benz Actros & Beiben prime movers for regional and cross-border transport across East Africa.",
    features: [
      "GPS tracking",
      "Cross-border expertise",
      "Containerized cargo",
      "Full truckload options",
    ],
    category: "road",
  },
  {
    id: "2",
    name: "Heavy Haulage",
    description:
      "Specialized low-bed trailers for machinery, construction equipment, and oversized cargo transport.",
    features: [
      "Low-bed trailers",
      "Oversized cargo",
      "Special permits",
      "Escort vehicles",
    ],
    category: "road",
  },
  {
    id: "3",
    name: "Cross-Border Transit",
    description:
      "Seamless transport across Kenya, Uganda, Rwanda, South Sudan, and DRC with full customs handling.",
    features: [
      "T1 Bond handling",
      "Customs clearance",
      "Border documentation",
      "Transit permits",
    ],
    category: "road",
  },
  // Sea Freight Services
  {
    id: "4",
    name: "Sea Freight",
    description:
      "Ocean cargo services through Mombasa and Lamu ports with international shipping connections.",
    features: [
      "FCL & LCL options",
      "Port handling",
      "International routes",
      "Container tracking",
    ],
    category: "sea",
  },
  {
    id: "5",
    name: "Port Clearing",
    description:
      "Comprehensive customs brokerage and port clearing services at Mombasa and Lamu ports.",
    features: [
      "Customs brokerage",
      "Documentation",
      "Duty calculation",
      "Fast clearance",
    ],
    category: "sea",
  },
  // Air Freight Services
  {
    id: "6",
    name: "Air Freight",
    description:
      "Express air cargo through JKIA for time-sensitive shipments to destinations across Africa and beyond.",
    features: [
      "Express delivery",
      "Temperature control",
      "High-value cargo",
      "Airport-to-airport",
    ],
    category: "air",
  },
  // Support Services
  {
    id: "7",
    name: "Warehousing",
    description:
      "Secure storage facilities in Mombasa with inventory management and distribution services.",
    features: [
      "24/7 security",
      "Inventory management",
      "Distribution support",
      "Flexible storage",
    ],
    category: "support",
  },
  {
    id: "8",
    name: "Procurement Services",
    description:
      "Strategic sourcing and documentation audits ensuring 100% compliance with regulations.",
    features: [
      "Sourcing support",
      "Compliance audits",
      "Vendor management",
      "Quality control",
    ],
    category: "support",
  },
];

export const stats = [
  { label: "Shipments Completed", value: "50,000+" },
  { label: "Countries Covered", value: "12" },
  { label: "Fleet Vehicles", value: "150+" },
  { label: "Years of Excellence", value: "15+" },
];
