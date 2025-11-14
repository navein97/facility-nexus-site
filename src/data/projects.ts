export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  completionDate: string;
}

export const projects: Project[] = [
  {
    id: "tech-campus-renovation",
    title: "Tech Campus Comprehensive Facility Upgrade",
    client: "TechCorp Industries",
    category: "Building Maintenance",
    description: "Complete facility renovation and maintenance overhaul for a 500,000 sq ft technology campus.",
    challenge: "TechCorp's aging facility infrastructure was causing frequent disruptions, high energy costs, and impacting employee satisfaction. Multiple systems required simultaneous updates without disrupting daily operations.",
    solution: "Implemented a phased renovation approach with advanced HVAC upgrades, LED lighting conversion, smart building controls, and preventive maintenance programs. All work was scheduled during off-peak hours to minimize disruption.",
    results: [
      "35% reduction in energy consumption",
      "90% decrease in maintenance-related disruptions",
      "42% improvement in employee satisfaction scores",
      "$2.1M in annual operational cost savings"
    ],
    image: "tech-campus",
    completionDate: "March 2024"
  },
  {
    id: "healthcare-facility-security",
    title: "Healthcare Complex Security Enhancement",
    client: "Metropolitan Health System",
    category: "Security Services",
    description: "Comprehensive security upgrade for a multi-building healthcare facility serving 2,000+ daily visitors.",
    challenge: "The healthcare facility needed to balance open, welcoming access for patients with enhanced security measures to protect staff, patients, and sensitive medical areas.",
    solution: "Deployed integrated security solution including access control systems, 24/7 security personnel, advanced CCTV network with analytics, and visitor management system. Implemented tiered access protocols for different facility zones.",
    results: [
      "Zero security incidents in 18 months",
      "65% faster emergency response times",
      "100% compliance with healthcare security regulations",
      "Improved patient and staff confidence ratings"
    ],
    image: "healthcare-security",
    completionDate: "January 2024"
  },
  {
    id: "retail-chain-cleaning",
    title: "National Retail Chain Cleaning Program",
    client: "Premier Retail Group",
    category: "Cleaning Services",
    description: "Standardized cleaning and sanitation program across 150 retail locations nationwide.",
    challenge: "Premier Retail needed consistent cleaning standards across all locations while adapting to local requirements and high-traffic retail environments requiring cleaning during operating hours.",
    solution: "Developed customized cleaning protocols with real-time quality monitoring, trained dedicated teams for each location, and implemented green cleaning products. Created flexible schedules to accommodate peak shopping hours.",
    results: [
      "98% customer satisfaction with store cleanliness",
      "45% reduction in cleaning-related complaints",
      "Achieved Green Seal certification for all locations",
      "15% cost savings through efficient resource allocation"
    ],
    image: "retail-cleaning",
    completionDate: "November 2023"
  }
];
