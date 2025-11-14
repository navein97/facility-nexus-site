export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "building-maintenance",
    title: "Building Maintenance",
    description: "Comprehensive building maintenance services to keep your facilities in optimal condition.",
    icon: "Wrench",
    features: [
      "Preventive maintenance programs",
      "HVAC system maintenance and repair",
      "Electrical system maintenance",
      "Plumbing services",
      "Structural repairs and improvements",
      "Emergency repair services 24/7"
    ],
    benefits: [
      "Reduced downtime and operational disruptions",
      "Extended equipment lifespan",
      "Lower long-term maintenance costs",
      "Improved facility safety and compliance"
    ],
    image: "building-maintenance"
  },
  {
    id: "cleaning-services",
    title: "Cleaning Services",
    description: "Professional cleaning solutions tailored to maintain pristine environments for your business.",
    icon: "Sparkles",
    features: [
      "Daily janitorial services",
      "Deep cleaning and sanitization",
      "Floor care and carpet cleaning",
      "Window and exterior cleaning",
      "Restroom sanitation",
      "Green cleaning options available"
    ],
    benefits: [
      "Healthier work environment",
      "Enhanced professional image",
      "Increased employee productivity",
      "Flexible scheduling options"
    ],
    image: "cleaning-services"
  },
  {
    id: "security-services",
    title: "Security Services",
    description: "Advanced security solutions to protect your people, property, and assets around the clock.",
    icon: "Shield",
    features: [
      "24/7 security personnel",
      "Access control systems",
      "CCTV monitoring and surveillance",
      "Security assessments and audits",
      "Emergency response protocols",
      "Visitor management systems"
    ],
    benefits: [
      "Enhanced safety and security",
      "Reduced liability and risk",
      "Peace of mind for occupants",
      "Compliance with security regulations"
    ],
    image: "security-services"
  },
  {
    id: "asset-management",
    title: "Asset & Equipment Management",
    description: "Strategic asset management solutions to maximize the value and performance of your facility assets.",
    icon: "Package",
    features: [
      "Asset inventory and tracking",
      "Equipment lifecycle management",
      "Maintenance scheduling and tracking",
      "Performance monitoring and reporting",
      "Replacement planning and budgeting",
      "Digital asset management platform"
    ],
    benefits: [
      "Optimized asset performance",
      "Improved budget forecasting",
      "Reduced capital expenditure",
      "Data-driven decision making"
    ],
    image: "asset-management"
  }
];
