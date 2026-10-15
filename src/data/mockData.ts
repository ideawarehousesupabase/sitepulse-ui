// Aligned textual mock data from SitePulse AI Prototype (sitepulseai.co.uk) & Business Plan v2.0

export interface MaterialRiskSample {
  id: string;
  material: string;
  poReference: string;
  activity: string;
  workPackage: string;
  requiredDate: string;
  expectedDelivery: string;
  supplier: string;
  readiness: number;
  status: "Critical" | "At Risk" | "Ready" | "Action Planned";
  crew: string;
  subcontractor: string;
  siteZone: string;
  costCode: string;
  costExposure: number;
  factors: {
    supplierReliability: string;
    gateAvailability: string;
    craneAvailability: string;
    storageCapacity: string;
  };
  downtime: {
    crewSize: number;
    crewCostPerPersonDay: number;
    estimatedDelayDays: number;
    idleLabour: number;
    standingPlant: number;
    programmeKnockOn: number;
  };
  recommendedAction: string;
  impactSaving: number;
}

export const demoSiteContext = {
  name: "Riverside Commercial Development",
  location: "Greater London, UK",
  projectType: "Commercial new build (Cat A / Shell & Core)",
  stage: "Superstructure & MEP First Fix",
  windowDays: 14,
  activeProjects: 4,
  needingAttention: 4,
  criticalCount: 1,
  totalExposure: 5820,
  mitigatedExposure: 3450,
  potentialSavings: 2370,
};

export const sampleRisks: MaterialRiskSample[] = [
  {
    id: "risk-rebar",
    material: "High-Yield B500B Rebar (40t)",
    poReference: "PO-2048",
    activity: "Reinforcement Fixing",
    workPackage: "Structural Works",
    requiredDate: "Tue 08 Sep",
    expectedDelivery: "Mon 07 Sep (16:00)",
    supplier: "SteelWorks UK",
    readiness: 42,
    status: "Critical",
    crew: "Reinforcement Fixing Gang A (6 operatives)",
    subcontractor: "ABC Groundworks",
    siteZone: "Zone B (Ground Slab West)",
    costCode: "STR-204",
    costExposure: 1850,
    factors: {
      supplierReliability: "68% — recurring partial deliveries & dispatch delays",
      gateAvailability: "Receiving window closed at 11:00; arrives 16:00",
      craneAvailability: "Tower Crane 1 allocated to steel frame until Wed",
      storageCapacity: "Zone A laydown area 80% occupied; no offload space",
    },
    downtime: {
      crewSize: 6,
      crewCostPerPersonDay: 250,
      estimatedDelayDays: 1,
      idleLabour: 1500,
      standingPlant: 250,
      programmeKnockOn: 100,
    },
    recommendedAction: "Resequence Gang A to Zone C pour preparation; move delivery window to Wed 08:00–10:00",
    impactSaving: 900,
  },
  {
    id: "risk-ahu",
    material: "Air Handling Unit (AHU-02 Roof Spec)",
    poReference: "PO-2070",
    activity: "Plant Room HVAC Installation",
    workPackage: "MEP Package",
    requiredDate: "Fri 11 Sep",
    expectedDelivery: "Fri 11 Sep (14:30)",
    supplier: "Airflow Systems",
    readiness: 61,
    status: "At Risk",
    crew: "MEP Installation Crew (4 operatives)",
    subcontractor: "Delta Mechanical Services",
    siteZone: "Level 3 Plant Room",
    costCode: "MEP-512",
    costExposure: 2400,
    factors: {
      supplierReliability: "61% — lead-time variance on fabricated housings",
      gateAvailability: "Gate 2 clear; oversized trailer permit required",
      craneAvailability: "Mobile crane lift scheduled for 09:00 only",
      storageCapacity: "Direct roof hoist required; no ground storage permitted",
    },
    downtime: {
      crewSize: 4,
      crewCostPerPersonDay: 320,
      estimatedDelayDays: 1.5,
      idleLabour: 1920,
      standingPlant: 380,
      programmeKnockOn: 100,
    },
    recommendedAction: "Advance delivery to Thu 16:00 or confirm rescheduled mobile crane slot with Logistics",
    impactSaving: 1200,
  },
  {
    id: "risk-steel",
    material: "Universal Beams UB 305 & Connection Plates",
    poReference: "PO-1932",
    activity: "Structural Steel Frame Erection",
    workPackage: "Frame Package",
    requiredDate: "Mon 14 Sep",
    expectedDelivery: "Fri 11 Sep",
    supplier: "SteelWorks UK",
    readiness: 78,
    status: "Action Planned",
    crew: "Steel Erection Gang (5 operatives + slinger)",
    subcontractor: "Northgate Steel Erectors",
    siteZone: "Zone C Frame Grid 4-8",
    costCode: "STR-318",
    costExposure: 1100,
    factors: {
      supplierReliability: "68% — on-time dispatch confirmed with tracking",
      gateAvailability: "Gate 1 delivery slot reserved 08:00–10:00",
      craneAvailability: "Tower Crane 1 booked and pre-certified",
      storageCapacity: "Holding laydown demarcated in Zone C",
    },
    downtime: {
      crewSize: 6,
      crewCostPerPersonDay: 280,
      estimatedDelayDays: 0.5,
      idleLabour: 840,
      standingPlant: 200,
      programmeKnockOn: 60,
    },
    recommendedAction: "Pre-alert logistics marshal for expedited gate offload via secondary fork-truck",
    impactSaving: 450,
  },
  {
    id: "risk-concrete",
    material: "Ready-Mix C32/40 Concrete (8 loads)",
    poReference: "PO-2051",
    activity: "Ground Slab Concrete Pour",
    workPackage: "Structural Works",
    requiredDate: "Wed 09 Sep",
    expectedDelivery: "Wed 09 Sep (06:30 staggered)",
    supplier: "Metro Concrete Ltd",
    readiness: 94,
    status: "Ready",
    crew: "Concrete Pouring Gang B (8 operatives)",
    subcontractor: "ABC Groundworks",
    siteZone: "Zone B (Ground Slab West)",
    costCode: "STR-210",
    costExposure: 470,
    factors: {
      supplierReliability: "91% — 30-min delivery window consistency",
      gateAvailability: "Gate 1 transit lane priority assigned",
      craneAvailability: "Concrete pump positioned and line-tested",
      storageCapacity: "Direct discharge into pump hopper; no laydown needed",
    },
    downtime: {
      crewSize: 8,
      crewCostPerPersonDay: 240,
      estimatedDelayDays: 0.2,
      idleLabour: 384,
      standingPlant: 86,
      programmeKnockOn: 0,
    },
    recommendedAction: "Batch tickets verified electronically; proceeding as planned",
    impactSaving: 0,
  },
];

export const surveyStatistics = [
  {
    figure: "72.7%",
    label: "Late Material Deliveries",
    description: "Report material delivery delays impacting their programme frequently or very frequently.",
    highlight: true,
  },
  {
    figure: "60.9%",
    label: "Idle Labour Exposure",
    description: "Report trade gangs standing idle on site waiting for late or un-offloaded materials.",
    highlight: true,
  },
  {
    figure: "82.0%",
    label: "Predictive Value Demand",
    description: "Consider a platform predicting delivery risk and downtime costs very or extremely valuable.",
    highlight: true,
  },
  {
    figure: "77.0%",
    label: "Spreadsheet & WhatsApp Dependency",
    description: "Currently coordinate logistics manually across Excel, phone calls, messaging and paper.",
    highlight: false,
  },
  {
    figure: "44.1%",
    label: "£2,000+ Typical Delay Cost",
    description: "Incur £2,000 to over £5,000 in unrecoverable costs on a single typical project delay.",
    highlight: false,
  },
  {
    figure: "49.1%",
    label: "Zero Predictive Confidence",
    description: "Admit they are not confident in seeing a delivery or site-readiness risk before it hits site.",
    highlight: false,
  },
];

export const platformModules = [
  {
    number: "01",
    title: "Construction Dependency Graph",
    subtitle: "The Structural Backbone",
    description: "Maps every material directly to the work package, scheduled activity, labour crew, subcontractor, site zone and cost code dependent on it.",
    capabilities: [
      "Material-to-activity relational mapping",
      "Labour crew dependency visibility",
      "Work package & trade relationships",
      "Subcontractor accountability links",
      "Site laydown & installation zone routing",
      "Commercial cost-code association",
    ],
    badge: "Structural Backbone",
    metricLabel: "Active Dependency Edges",
    metricValue: "1,420 mapped",
  },
  {
    number: "02",
    title: "Material Readiness Score",
    subtitle: "Usability vs Mere Arrival",
    description: "Evaluates whether materials are genuinely usable at the required time and place, rather than simply recording that a lorry has reached the gate.",
    capabilities: [
      "Supplier delivery history weighting",
      "Lead-time variance & dispatch tracking",
      "Available on-site buffer stock",
      "Offloading & crane slot availability",
      "Laydown zone holding capacity",
      "Activity schedule & float tolerance",
    ],
    badge: "Predictive Usability",
    metricLabel: "Composite Index",
    metricValue: "0–100 Readiness",
  },
  {
    number: "03",
    title: "Supplier Reliability Model",
    subtitle: "Objective Merchant Intelligence",
    description: "Scores supplier performance across historical UK delivery outcomes, surfacing hidden procurement and fulfilment risks before orders are placed.",
    capabilities: [
      "On-time delivery accuracy analysis",
      "Partial delivery & split-load frequency",
      "Lead-time consistency standard deviation",
      "Material defect & return tracking",
      "Issue-resolution response velocity",
      "Regional & category benchmark comparisons",
    ],
    badge: "Merchant Forensics",
    metricLabel: "UK Benchmark Baseline",
    metricValue: "Regional Calibration",
  },
  {
    number: "04",
    title: "Site Constraint Modelling",
    subtitle: "Physical Site Reality",
    description: "Accounts for real-world physical site constraints that dictate whether materials can physically be offloaded, stored and reached when work begins.",
    capabilities: [
      "Delivery gate booking windows",
      "Tower crane, hoist & forklift schedules",
      "Laydown & storage zone capacity thresholds",
      "Unloading crew availability & certifications",
      "Local council permitted working hours",
      "Traffic & logistics marshalling constraints",
    ],
    badge: "Site Logistics",
    metricLabel: "Constraint Digitisation",
    metricValue: "Setup Included",
  },
  {
    number: "05",
    title: "Labour Downtime Cost Calculator",
    subtitle: "Financial Exposure Pricing",
    description: "Translates abstract delivery risks into hard monetary terms: pricing idle trades, standing equipment hire and compounding programme delay.",
    capabilities: [
      "Idle labour cost estimation by gang",
      "Subcontractor day rate calculation",
      "Standing plant & crane hire day charges",
      "Programme preliminaries delay knock-on",
      "Direct cost-code attribution for QS review",
    ],
    badge: "Commercial Visibility",
    metricLabel: "Average Delay Cost",
    metricValue: "£2,000–£5,000/event",
  },
  {
    number: "06",
    title: "Predictive Recommendation Engine",
    subtitle: "Least-Cost Practical Solutions",
    description: "Ranks actionable corrective logistics interventions by their net financial impact and presents the single cheapest route before the lorry departs.",
    capabilities: [
      "Split material delivery recommendations",
      "Reschedule to open gate / crane receiving windows",
      "Switch to higher-reliability alternative suppliers",
      "Resequence activities to materials already verified",
      "Reallocate booked labour to ready site zones",
    ],
    badge: "Action Intelligence",
    metricLabel: "Ranked Interventions",
    metricValue: "Lowest Net Cost",
  },
];

export const operationalViewsData = {
  siteManager: {
    title: "Site Manager Perspective",
    role: "On-Site Operations & Gang Management",
    focus: "Today's deliveries, crane slots, at-risk gangs, and instantaneous corrective options.",
    highlights: [
      { label: "High-Priority Alert", value: "Rebar PO-2048 arrives 16:00 (Gate closes 11:00)" },
      { label: "Affected Trade", value: "ABC Groundworks Gang A (6 fixers booked for Tue)" },
      { label: "Recommended Action", value: "Resequence Gang A to Zone C pour prep; open Wed 08:00 slot" },
      { label: "Time Saved", value: "7.5 hours of supervisor phone chasing eliminated" },
    ],
  },
  quantitySurveyor: {
    title: "Quantity Surveyor Perspective",
    role: "Commercial Exposure & Preliminaries Control",
    focus: "Cost-code variance, idle crew liabilities, standing plant exposure and claim substantiation.",
    highlights: [
      { label: "Gross Exposure at Risk", value: "£5,820 across next 14-day schedule" },
      { label: "Mitigated Cost", value: "£3,450 through proactive resequencing" },
      { label: "Direct Savings", value: "£2,370 unrecoverable delay costs avoided" },
      { label: "Audit Trail", value: "ISO & CDM compliant evidence for supplier variance" },
    ],
  },
  procurement: {
    title: "Procurement Coordinator Perspective",
    role: "Merchant Reliability & Order Scheduling",
    focus: "Supplier lead-time drift, recurring partial deliveries, and proactive dispatch coordination.",
    highlights: [
      { label: "Underperforming Vendor", value: "SteelWorks UK (68% on-time accuracy)" },
      { label: "High-Reliability Vendor", value: "Metro Concrete Ltd (91% accuracy)" },
      { label: "Order Drift Warning", value: "PO-2070 AHU housing flagged 48h before site dispatch" },
      { label: "Integration Bridges", value: "Procore, Sage & Xero live sync" },
    ],
  },
};

export const workflowSteps = [
  {
    step: "01",
    title: "Connect Project Information",
    summary: "Ingest schedules, purchase orders and labour plans without changing existing tools.",
    detail: "Import purchase orders, material delivery dates, work breakdown structures, activity programmes, and trade gang allocations via CSV, spreadsheets, or Procore/Sage/Xero integrations.",
  },
  {
    step: "02",
    title: "Map Construction Dependencies",
    summary: "Link materials to the specific people, tasks and physical zones waiting for them.",
    detail: "The Construction Dependency Graph builds relational edges connecting each incoming material item to the planned activity, subcontractor crew, site laydown zone and accounting cost code.",
  },
  {
    step: "03",
    title: "Evaluate Material Readiness",
    summary: "Simulate true site usability based on suppliers, gates, cranes and storage.",
    detail: "The platform calculates a dynamic 0–100 Material Readiness Score using historical merchant reliability, gate booking windows, tower crane availability, and laydown capacity.",
  },
  {
    step: "04",
    title: "Estimate Financial Exposure",
    summary: "Translate potential disruption into hard pound sterling (£) downtime cost.",
    detail: "When an upcoming activity scores below threshold, the calculator computes idle labour day rates, standing equipment charges, and knock-on delay costs against the specific cost code.",
  },
  {
    step: "05",
    title: "Recommend Corrective Action",
    summary: "Present the single lowest-cost practical solution before the lorry leaves.",
    detail: "The recommendation engine compares alternative suppliers, split deliveries, rescheduled crane windows, or crew resequencing, ranking each by net financial impact.",
  },
];

export const pricingPlans = [
  {
    name: "Logistics Core",
    price: "£80",
    frequency: "per site / month",
    target: "Solo contractors and small builders",
    badge: "Tracking Tier",
    highlight: false,
    description: "Fundamental digital logistics tracking and material delivery coordination for single-site builders.",
    features: [
      "Material scheduling & order tracking",
      "Delivery arrival logging & status alerts",
      "Basic site logistics metrics",
      "Mobile access for site managers",
      "CSV & spreadsheet data import",
    ],
    note: "Tracking-focused tier. Excludes predictive risk engine and dependency graphs.",
    cta: "Request a Pilot",
  },
  {
    name: "Predictive Architect",
    price: "£220",
    frequency: "per site / month",
    target: "High-volume groundworks, MEP and fit-out firms",
    badge: "Predictive capability starts here",
    highlight: true,
    description: "The complete predictive construction logistics engine connecting dependencies, readiness, downtime costs and integrations.",
    features: [
      "Construction Dependency Graph mapping",
      "Material Readiness Score engine (0–100)",
      "Supplier Reliability Model & scoring",
      "Labour Downtime Cost Calculator",
      "Predictive delay-risk alerting engine",
      "Procore integration bridge",
      "Sage integration bridge",
      "Xero integration bridge",
    ],
    note: "Designed for SME contractors managing complex trade sequencing and crane windows.",
    cta: "Request a Pilot",
  },
  {
    name: "Enterprise Control",
    price: "£600",
    frequency: "listed per site / month",
    target: "Multi-site contractors and regional developers",
    badge: "Multi-Site Oversight",
    highlight: false,
    description: "Cross-site logistics optimization, regional benchmarking, and dedicated operational oversight for multi-project developers.",
    features: [
      "Multi-site constraint & crane optimisation",
      "Cross-site supplier & contractor benchmarking",
      "Construction Logistics Network participation",
      "Advanced logistics forensics & dispute audits",
      "Named Customer Success Manager",
    ],
    note: "Multi-site oversight tier. Custom site-allowance enquiries welcomed.",
    cta: "Request a Pilot",
  },
];

export const additionalServices = [
  {
    name: "Site Setup & API Sync",
    price: "£390",
    frequency: "one-off per new site",
    description: "Hands-on engineering onboarding to capture physical site parameters and calibrate accounting/project integrations.",
    deliverables: [
      "Initial digital site layout & laydown templating",
      "Capture of physical constraints (gates, cranes, hours)",
      "Procurement schedule & PO data ingestion",
      "Integration configuration & bridge calibration",
    ],
  },
  {
    name: "Logistics Health Audit",
    price: "£500",
    frequency: "one-off",
    description: "In-depth forensic review of historical material delays, supplier friction and standing labour downtime on legacy or disputed sites.",
    deliverables: [
      "Historical project delay & variance forensics",
      "Merchant fulfilment failure & delivery issue analysis",
      "Physical site bottleneck & access assessment",
      "Actionable logistics optimization recommendations",
    ],
  },
];

export const targetSectors = [
  {
    title: "Groundworks & Civil Engineering",
    pain: "Heavy materials (rebar, concrete, aggregates), strict gate booking windows, tower crane dependence, and trade gangs where one missing delivery idles 6–10 operatives.",
    benefit: "Predictive Architect pays for itself by preventing a single lost gang-day (£1,500+).",
  },
  {
    title: "Fit-Out & Interiors Contractors",
    pain: "Hundreds of diverse small line-item materials whose sequence matters more than unit cost, combined with intense programme compression in urban locations.",
    benefit: "Full dependency mapping ensures partitions, drylining and finishes never wait on missing fixings.",
  },
  {
    title: "Mechanical & Electrical (MEP) Installers",
    pain: "Long-lead engineered plant (AHUs, chillers, switchgear) where absence of one component halts entire testing, commissioning and first-fix sequences.",
    benefit: "Reliability scoring warns of supplier drift weeks before equipment is needed on site.",
  },
  {
    title: "Regional Developers & Multi-Site Contractors",
    pain: "Managing multiple active construction sites without central logistics staff, leading to duplicated crane bookings and fragmented merchant communications.",
    benefit: "Enterprise Control provides portfolio-wide visibility, constraint balancing and peer benchmarking.",
  },
];

export const founders = [
  {
    name: "Ramakrishna Vobilishetti",
    role: "Founder & Chief Executive Officer",
    qualifications: "BEng Civil Engineering (JNTU), MSc Logistics & Supply Chain Management (Northumbria University)",
    summary: "Spent eight years bridging physical site operations and enterprise materials management. Former Site Engineer at NCC Limited managing daily building operations, building materials and site workforce; former SAP Materials Management Functional Consultant at Value Biz Solutions designing procurement workflows and root-cause failure specs; and Logistics Executive at Amazon UK managing high-volume supply chain bottlenecks.",
    focus: "Designed the Construction Dependency Graph, the Material Readiness Score weighting logic, and the Labour Downtime Cost structure from hands-on industry experience.",
  },
  {
    name: "Kiran Baddeli",
    role: "Chief Technology Officer & Technical Co-Founder",
    qualifications: "13 Years Enterprise Platform Engineering & DevOps",
    summary: "Data Platform Engineer at Nationwide Building Society since 2023 working on AWS, on-premise architectures, Terraform IaC, containerised microservices and enterprise tokenisation. Previously Senior DevOps Platform Engineer at Tech Mahindra, Build & Release Engineer at DXC Technologies, and DevOps roles at Capgemini and CSC. Deep background in AWS, Kubernetes, Docker, Python and relational databases.",
    focus: "Architects the UK-hosted multi-tenant cloud architecture, integration bridges (Procore, Sage, Xero), and ICO-compliant data protection segregation.",
  },
];

export const faqs = [
  {
    q: "1. What is SitePulse AI?",
    a: "SitePulse AI is a predictive construction logistics platform being developed for UK SME contractors. It is designed to connect material deliveries, construction activities, supplier performance, site constraints and labour costs to support better logistics decisions.",
  },
  {
    q: "2. How is SitePulse AI different from standard delivery tracking?",
    a: "Standard delivery tracking focuses on whether materials have been ordered, dispatched or delivered. SitePulse AI is designed to evaluate whether those materials will actually be usable when the relevant construction activity is scheduled.",
  },
  {
    q: "3. Who is SitePulse AI designed for?",
    a: "The platform is designed primarily for groundworks and civil engineering subcontractors, fit-out contractors, mechanical and electrical installers, regional developers and multi-site construction organisations.",
  },
  {
    q: "4. Does SitePulse AI replace existing construction management software?",
    a: "No. The platform is intended to complement existing construction management, procurement and accounting tools rather than replace them.",
  },
  {
    q: "5. Can SitePulse AI connect with Procore, Sage and Xero?",
    a: "Integration bridges with Procore, Sage and Xero are part of the planned Predictive Architect offering. Their production availability is subject to the platform's development and rollout.",
  },
  {
    q: "6. Does SitePulse AI require cameras or additional hardware?",
    a: "No. The proposed platform does not require cameras, IoT sensors, telematics devices or other specialist site hardware. It is designed to use existing project information, imports, integrations and manually entered site data.",
  },
  {
    q: "7. What is the Material Readiness Score?",
    a: "The Material Readiness Score is designed to predict whether a required material will be usable at the right location and time based on supplier performance, delivery information, stock availability, unloading capacity and site constraints.",
  },
  {
    q: "8. How does SitePulse AI estimate labour downtime costs?",
    a: "The intended calculator combines factors such as affected crew hours, subcontractor labour rates, standing equipment costs and wider programme impacts to estimate potential financial exposure.",
  },
  {
    q: "9. How much does SitePulse AI cost?",
    a: "The business plan specifies three subscription tiers: Logistics Core at £80 per site per month, Predictive Architect at £220 per site per month and Enterprise Control at a listed price of £600 per site per month. Site Setup & API Sync is £390 one-off, and a Logistics Health Audit is £500 one-off.",
  },
  {
    q: "10. Is SitePulse AI currently available commercially?",
    a: "SitePulse AI is currently at the prototype stage and preparing for real-site validation. Interested contractors can enquire about the proposed pilot programme and future availability.",
  },
  {
    q: "11. How will project information be handled?",
    a: "The proposed production architecture includes UK-hosted cloud infrastructure, logically segregated customer data and encryption in transit and at rest. Data protection processes and assessments are included in the development and pilot preparations.",
  },
  {
    q: "12. How can my construction company request a pilot?",
    a: "Use the Request a Pilot enquiry form on this website to provide your contact and organisation details. The form is a frontend demonstration and does not automatically transmit an enquiry to SitePulse AI.",
  },
];
