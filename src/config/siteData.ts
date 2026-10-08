export interface SiteConfig {
  businessName: string;
  tagline: string;
  phoneDisplay: string;
  phoneRaw: string; // international digits without plus for wa.me
  whatsappNumber: string;
  email: string;
  address: string;
  serviceHours: string;
}

export const SITE_CONFIG: SiteConfig = {
  // Replace with your real registered business name
  businessName: "Gurugram NRI Property Care",
  tagline: "Your Gurugram property, looked after while you're abroad.",
  phoneDisplay: "+91 98765 43210",
  phoneRaw: "919876543210",
  whatsappNumber: "919876543210",
  email: "care@nripropertycaregurugram.com",
  address: "Sector 54, Golf Course Road, Gurugram, Haryana 122002",
  serviceHours: "Mon – Sat: 9:00 AM – 7:00 PM IST (Emergency response 24/7 for Premium members)",
};

export const WHATSAPP_DEFAULT_MESSAGE = encodeURIComponent(
  "Hello, I am an NRI looking for property care and inspection services for my property in Gurugram. Please share more details."
);

export const PROBLEMS = [
  {
    id: "empty-damage",
    title: "Unnoticed Damage & Seepage",
    description: "Monsoon dampness, balcony drain clogs, termite build-up, and ceiling seepage can silently ruin woodwork and flooring when a flat sits locked for months.",
    icon: "AlertTriangle",
  },
  {
    id: "unpaid-bills",
    title: "Unpaid Bills & Society Penalties",
    description: "Missed electricity bills (DHBVN), pending maintenance dues, or property tax letters piling up at the door, resulting in penalty surcharges or power cuts.",
    icon: "Receipt",
  },
  {
    id: "bad-tenants",
    title: "Tenant Friction & Delayed Rent",
    description: "Difficulty managing tenant complaints across 10-hour time zones, enforcing lease terms, conducting physical checkouts, or ensuring regular rent collection.",
    icon: "UsersX",
  },
  {
    id: "unreliable-caretakers",
    title: "Unreliable Informal Help",
    description: "Depending on distant relatives or local brokers who promise to check in, but rarely visit or only call when there is an uncomfortable request for money.",
    icon: "Clock",
  },
  {
    id: "no-repair-supervision",
    title: "No One to Oversee Repairs",
    description: "When an AC leaks, plumbing fails, or deep cleaning is needed, finding trustworthy vendors and supervising them on-site from abroad is nearly impossible.",
    icon: "Wrench",
  },
  {
    id: "no-proof",
    title: "Zero Transparency & No Proof",
    description: "Never knowing the actual condition of your multi-crore investment because no one sends objective, date-stamped photo and video proof of the interior.",
    icon: "ShieldAlert",
  },
];

export const SERVICES = [
  {
    id: "property-inspections",
    title: "Periodic Property Inspections",
    description: "Scheduled physical walk-throughs checking locks, doors, seepage, dampness, pest activity, and electrical fittings.",
    icon: "HomeCheck",
    badge: "Core Service",
  },
  {
    id: "photo-video-reports",
    title: "Photo & Video Inspection Reports",
    description: "High-resolution 360° photo and video walkthroughs with timestamped proof sent straight to your WhatsApp and email.",
    icon: "Camera",
    badge: "Detailed Proof",
  },
  {
    id: "bill-payments",
    title: "Utility Bill & Society Dues Payment",
    description: "Monitoring and settlement of electricity (DHBVN), water, piped gas, society maintenance, and Municipal Corporation (MCG) taxes.",
    icon: "CreditCard",
    badge: "Never Miss Dues",
  },
  {
    id: "cleaning-pest",
    title: "Deep Cleaning & Pest Control",
    description: "Arranging scheduled airing of the house, dusting, bathroom descaling, balcony washing, and anti-termite preventative treatments.",
    icon: "Sparkles",
    badge: "Turnkey Clean",
  },
  {
    id: "repairs-maintenance",
    title: "Repairs & Vendor Supervision",
    description: "Carpentry, plumbing, electrical repairs, painting, and appliance maintenance supervised on-site by our team with before/after photos.",
    icon: "Hammer",
    badge: "Verified Work",
  },
  {
    id: "tenant-search",
    title: "Tenant Search & Police Verification",
    description: "Screening prospective tenants, police verification, drafting standard registered rent agreements, and strict move-in inventory documentation.",
    icon: "UserCheck",
    badge: "Safe Tenancy",
  },
  {
    id: "rent-collection",
    title: "Rent Collection & Follow-up",
    description: "Systematic monthly rent tracking, formal receipts, gentle payment follow-ups, and handling routine tenant maintenance queries.",
    icon: "TrendingUp",
    badge: "Smooth Cashflow",
  },
  {
    id: "document-society",
    title: "Document & Society RWA Coordination",
    description: "Attending RWA formalities, collecting notices, obtaining tenant move-in/move-out gate passes, and physical document courier when needed.",
    icon: "FileText",
    badge: "Local Liaison",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Share Property Details",
    description: "Fill our quick 60-second form or message us on WhatsApp with your Gurugram sector, society name, and whether the home is vacant or rented.",
  },
  {
    step: "02",
    title: "Free First Physical Inspection",
    description: "Our local Gurugram operations manager visits your property for a complimentary 40-point assessment and shares an initial condition audit report.",
  },
  {
    step: "03",
    title: "Choose a Care Plan",
    description: "Select between Basic Watch, Standard Care, or custom one-off services. Sign a straightforward formal agreement with complete digital key-custody protocol.",
  },
  {
    step: "04",
    title: "Get Regular Reports & Total Peace",
    description: "Sit back abroad. Receive periodic HD photo/video reports, instant bill receipts, and a single responsive point of contact on WhatsApp.",
  },
];

export const PLANS = [
  {
    id: "basic",
    name: "Basic Watch",
    subtitle: "Ideal for well-maintained vacant flats needing regular oversight",
    priceInr: "2,999",
    priceNote: "per month (billed quarterly)",
    isPopular: false,
    features: [
      "2 physical inspections every month",
      "Timestamped HD photo & video report",
      "Airing of home during visits (prevents odor/mould)",
      "Utility meter reading check (DHBVN / Gas)",
      "Society mailbox & MCG notice collection",
      "Immediate WhatsApp alert for any leaks or issues",
    ],
    ctaText: "Choose Basic Watch",
    planTag: "Essential Oversight",
  },
  {
    id: "standard",
    name: "Standard Care",
    subtitle: "Our most chosen plan for total peace of mind in high-value societies",
    priceInr: "4,999",
    priceNote: "per month (billed quarterly)",
    isPopular: true,
    features: [
      "Weekly physical visits (4 per month)",
      "Comprehensive 40-point inspection checklist",
      "HD video walkthrough uploaded to secure drive",
      "Bill payments & society maintenance settlement",
      "Vendor supervision for routine repairs (up to 2 hrs/mo)",
      "Airing, tap flushing, and geyser/drain check",
      "RWA liaison and gate pass assistance",
      "Priority WhatsApp support from our local team",
    ],
    ctaText: "Choose Standard Care",
    planTag: "Most Popular",
  },
  {
    id: "premium",
    name: "Premium Management",
    subtitle: "Complete white-glove care for luxury villas, penthouses, or tenanted homes",
    priceInr: "7,999",
    priceNote: "per month (billed quarterly)",
    isPopular: false,
    features: [
      "All features in Standard Care",
      "Dedicated Senior Property Manager",
      "Monthly scheduled live video call from inside your home",
      "Full tenant management & monthly rent tracking (if rented)",
      "Quarterly professional deep cleaning arrangement",
      "24-hour emergency physical response guarantee",
      "Annual property tax (MCG) assessment assistance",
      "Move-in & move-out snagging and inventory audit",
    ],
    ctaText: "Choose Premium",
    planTag: "White Glove",
  },
];

export const ONE_OFF_SERVICES = [
  {
    title: "New Flat Builder Possession & Snagging",
    description: "Detailed 150-point audit of finishes, electrical sockets, seepage, and window alignment before taking possession from builders like DLF, M3M, Godrej, or Tata.",
  },
  {
    title: "Deep Cleaning & Pest Fumigation",
    description: "Professional machine scrubbing, balcony wash, kitchen degreasing, bathroom descaling, and herbal pest treatment prior to furnishing or tenant arrival.",
  },
  {
    title: "Tenant Move-In / Move-Out Inspection",
    description: "Itemized photographic inventory cataloging condition of appliances, woodwork, sanitaryware, and walls before security deposit settlement.",
  },
  {
    title: "Emergency Visit & Key Handover",
    description: "On-demand authorized physical access for repairmen, interior designers, or prospective vetted buyers/tenants under strict logging.",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "100% Transparent Pricing — No Hidden Fees",
    description: "No surprise markups on repair bills or third-party vendor charges. You pay the exact vendor invoice with actual GST receipts, plus our flat transparent fee.",
    icon: "CheckCircle2",
  },
  {
    title: "Strict Key & Document Custody Protocol",
    description: "We never take custody of keys or documents without a formal signed agreement, digital access log, and tamper-evident sealed key locker storage.",
    icon: "KeyRound",
  },
  {
    title: "Dedicated Local Gurugram Operations Team",
    description: "We are not a faceless aggregator or call center. Our trained ground managers live in Gurugram and are personally familiar with society RWA guidelines and local vendors.",
    icon: "MapPin",
  },
  {
    title: "Verifiable Digital Proof for Every Single Visit",
    description: "Every inspection report contains GPS-stamped, time-coded photos, live checklist remarks, and an unbroken video walkthrough stored securely in your private link.",
    icon: "FileCheck",
  },
  {
    title: "Flexible Overseas Payment Channels",
    description: "Pay easily in INR, AED, USD, GBP, CAD, or AUD via direct bank transfer, NRE/NRO accounts, international cards, or automated UPI without hassle.",
    icon: "Globe2",
  },
  {
    title: "Strict Neutrality — We Work Only for You",
    description: "We are strictly a caretaker and inspection service. We do not operate as aggressive real estate brokers pushing you to sell, ensuring zero conflict of interest.",
    icon: "Scale",
  },
];

export const COVERAGE_SECTORS = [
  {
    zone: "Golf Course Road & DLF",
    areas: "DLF Phase 1, 2, 3, 4, 5, Sector 42, 43, 53, 54",
    societies: "DLF The Camellias, The Magnolias, The Aralias, The Crest, DLF Park Place, DLF Belaire, DLF Pinnacle, Princeton, Carleton Estate",
  },
  {
    zone: "Golf Course Extension Road & Southern Peripheral Road (SPR)",
    areas: "Sector 55, 56, 57, 58, 59, 61, 62, 65, 66, 67, 68, 69, 70",
    societies: "Ireo Grand Arch, Ireo Skyon, M3M Golfestate, M3M Merlin, Pioneer Araya, Tata Primanti, Emaar Marbella, Mahindra Luminare, AIPL The PeaceFull",
  },
  {
    zone: "Sohna Road & Central Gurugram",
    areas: "Sector 47, 48, 49, 50, 51, Nirvana Country, Malibu Towne",
    societies: "Vatika City, Central Park 2, Uniworld Resorts, Sispal Vihar, Eldeco Mansionz, South City 1 & 2, Orchid Petals",
  },
  {
    zone: "Dwarka Expressway & New Gurugram",
    areas: "Sector 81 to 95, Sector 102 to 113",
    societies: "Sobha City, Tata La Vida, Godrej Meridien, Puri Diplomatic Greens, Experion The Heartsong, Bestech Park View Grand Spa, DLF Ultima",
  },
  {
    zone: "MG Road, Cyber City & Ambience Islands",
    areas: "Sector 24, 25, 27, 28, Heritage City, Essel Towers",
    societies: "Ambience Caitriona, DLF Phase 2 Villas, Beverly Park 1 & 2, Garden Estate, Silver Oaks",
  },
];

export const ABOUT_FOUNDER = {
  name: "Gaurav Sharma", // Placeholder name
  role: "Founder & Lead Operations, Gurugram NRI Care",
  photoPlaceholderNote: "Replace with founder photo (recommended 400x400px)",
  storyLine1: "Born and raised in Gurugram with a family background in civil engineering, I spent six years working in Dubai before returning home. While abroad, I watched fellow NRIs constantly stress over water seepage, unpaid society bills, and unverified caretakers neglecting their prized homes.",
  storyLine2: "I founded this service to provide overseas owners the exact standard of transparency, punctuality, and military-grade reporting I wished I had when living overseas. Today, our dedicated ground team treats every Gurugram home with the personal respect and vigilance it deserves.",
  credentials: [
    "Resident of Gurugram for 28+ years",
    "Ex-Dubai Corporate Professional understanding NRI time zones",
    "On-ground team covering all prime Gurugram condominiums",
  ],
};

export const FAQS = [
  {
    question: "How does your pricing work, and are there any hidden fees?",
    answer: "Our pricing is transparent and flat-rate. You pay a predictable monthly or quarterly fee for your chosen inspection plan (Basic, Standard, or Premium). If any repairs, plumbing replacements, or painting are required, we first share a detailed estimate with quotes for your approval. You only reimburse the actual vendor bill with genuine tax receipts — we do not add hidden surcharges or commissions.",
  },
  {
    question: "How do you ensure the safety and security of my house keys?",
    answer: "Key security is our highest operational priority. Keys are never accepted without a formal written custody agreement. All keys are tagged with an anonymous alphanumeric code (no society or flat numbers printed on tags), stored inside a fire-resistant dual-lock key safe at our Gurugram office, and only checked out by authorized inspection officers with time-stamped digital entry logs.",
  },
  {
    question: "How and when are inspection reports delivered to me?",
    answer: "Within 6 hours of completing the physical inspection, you will receive a comprehensive digital report directly on your WhatsApp and email. The report includes high-resolution, timestamped photos of every room, utility meter readings, balcony and plumbing checks, any flagged issues, and a secure private cloud link to the video walkthrough.",
  },
  {
    question: "Can you help find, verify, and manage tenants for my property?",
    answer: "Yes. In our Premium plan or as a standalone service, we assist with finding vetted corporate/family tenants, completing local police verification, drafting standard registered lease agreements, documenting move-in inventory, and following up on monthly rent receipts and society gate passes.",
  },
  {
    question: "What happens if there is an unexpected emergency at my property?",
    answer: "Whether it is heavy rain causing water accumulation, an electrical short circuit alert from your society RWA, or a tenant lockout, our local Gurugram operations team is within driving distance of major sectors. Standard and Premium members get priority dispatch; our team visits the site, secures the premises, and updates you immediately via video call or WhatsApp.",
  },
  {
    question: "How can I pay you easily from abroad?",
    answer: "We support seamless international payment methods. You can pay via direct NRE / NRO bank transfer (NEFT/IMPS/RTGS), international credit or debit cards, international wire (SWIFT), or secure digital payment links in USD, AED, GBP, CAD, EUR, or AUD.",
  },
  {
    question: "How do I know I can trust you with a multi-crore property?",
    answer: "We operate as a legally registered entity with an on-ground physical office in Gurugram, signed bilateral service agreements, zero broker bias, and full accountability. Furthermore, we invite you to start with our completely FREE First Inspection. You experience our professionalism, reporting thoroughness, and communication first-hand before paying a single rupee.",
  },
];

export const COUNTRIES = [
  { code: "+971", name: "United Arab Emirates (UAE)" },
  { code: "+1", name: "United States (USA)" },
  { code: "+44", name: "United Kingdom (UK)" },
  { code: "+1", name: "Canada" },
  { code: "+61", name: "Australia" },
  { code: "+65", name: "Singapore" },
  { code: "+974", name: "Qatar" },
  { code: "+966", name: "Saudi Arabia" },
  { code: "+968", name: "Oman" },
  { code: "+91", name: "India (Other City / Outstation)" },
  { code: "+", name: "Other Country" },
];
