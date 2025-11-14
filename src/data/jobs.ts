export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  postedDate: string;
}

export const jobs: Job[] = [
  {
    id: "facility-manager",
    title: "Facility Manager",
    department: "Operations",
    location: "New York, NY",
    type: "Full-time",
    description: "We're seeking an experienced Facility Manager to oversee operations for a premier commercial office complex in Manhattan. This role requires strong leadership skills and comprehensive knowledge of building systems and maintenance operations.",
    responsibilities: [
      "Oversee daily facility operations including maintenance, cleaning, and security",
      "Manage vendor relationships and service contracts",
      "Develop and implement preventive maintenance programs",
      "Ensure compliance with safety regulations and building codes",
      "Manage facility budget and control operational costs",
      "Lead and develop facility staff team",
      "Coordinate capital improvement projects",
      "Respond to emergency situations and critical issues"
    ],
    qualifications: [
      "Bachelor's degree in Facility Management, Engineering, or related field",
      "5+ years of facility management experience",
      "Strong knowledge of building systems (HVAC, electrical, plumbing)",
      "Experience with CMMS software and facility management platforms",
      "Excellent communication and leadership skills",
      "Professional certifications (CFM, FMP) preferred",
      "Budget management experience",
      "Strong problem-solving abilities"
    ],
    benefits: [
      "Competitive salary: $85,000 - $105,000",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Paid time off and holidays",
      "Professional development opportunities",
      "Company vehicle provided",
      "Performance bonuses",
      "Career advancement opportunities"
    ],
    postedDate: "May 10, 2024"
  },
  {
    id: "security-supervisor",
    title: "Security Supervisor",
    department: "Security",
    location: "Chicago, IL",
    type: "Full-time",
    description: "Join our team as a Security Supervisor for a large healthcare facility. You'll lead a team of security officers and ensure the safety and security of staff, patients, and visitors in a fast-paced environment.",
    responsibilities: [
      "Supervise and schedule security personnel across multiple shifts",
      "Monitor security systems and respond to alarms",
      "Conduct security patrols and investigations",
      "Coordinate with local law enforcement when necessary",
      "Train security staff on protocols and procedures",
      "Prepare incident reports and maintain security logs",
      "Implement access control and visitor management",
      "Ensure compliance with healthcare security regulations"
    ],
    qualifications: [
      "High school diploma or equivalent; Associate's degree preferred",
      "3+ years of security experience, with 1+ year in supervisory role",
      "Healthcare security experience strongly preferred",
      "Valid security guard license",
      "First Aid/CPR certification",
      "Excellent observational and communication skills",
      "Ability to remain calm under pressure",
      "Clean background check and drug screening"
    ],
    benefits: [
      "Competitive hourly rate: $24 - $28/hour",
      "Health insurance coverage",
      "Paid training and certifications",
      "Shift differential for nights/weekends",
      "Retirement plan with company contribution",
      "Paid time off",
      "Uniform provided",
      "Opportunities for advancement"
    ],
    postedDate: "May 12, 2024"
  },
  {
    id: "maintenance-technician",
    title: "Maintenance Technician",
    department: "Maintenance",
    location: "Los Angeles, CA",
    type: "Full-time",
    description: "We're looking for a skilled Maintenance Technician to join our team servicing commercial properties throughout the Los Angeles area. This hands-on role offers variety, challenge, and excellent growth opportunities.",
    responsibilities: [
      "Perform preventive maintenance on building systems and equipment",
      "Troubleshoot and repair HVAC, electrical, and plumbing systems",
      "Respond to maintenance requests and emergency calls",
      "Conduct regular inspections of facilities and equipment",
      "Maintain accurate records of work performed",
      "Follow safety protocols and procedures",
      "Coordinate with contractors for specialized repairs",
      "Assist with facility improvement projects"
    ],
    qualifications: [
      "High school diploma or equivalent; technical certification preferred",
      "2+ years of commercial maintenance experience",
      "Strong knowledge of HVAC, electrical, and plumbing systems",
      "Ability to read blueprints and technical manuals",
      "Valid driver's license with clean driving record",
      "EPA certification preferred",
      "Ability to lift 50+ lbs and work at heights",
      "Strong troubleshooting and problem-solving skills"
    ],
    benefits: [
      "Competitive hourly rate: $22 - $28/hour",
      "Company truck and tools provided",
      "Health and dental insurance",
      "401(k) retirement plan",
      "Paid time off and holidays",
      "Ongoing training and certifications",
      "Overtime opportunities",
      "Tool allowance"
    ],
    postedDate: "May 5, 2024"
  }
];
