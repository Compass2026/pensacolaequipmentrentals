export interface EquipmentAttachment {
  name: string;
  included: boolean;
  dailyRate?: number;
  weeklyRate?: number;
  monthlyRate?: number;
}

export interface EquipmentSpec {
  label: string;
  value: string;
}

export interface EquipmentFaq {
  question: string;
  answer: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  brand: string;
  model: string;
  year?: string;
  category: "Excavators" | "Skid Steers" | "Trailers" | "Mowers" | "Lawn & Hand Tools";
  shortDescription: string;
  longDescription: string;
  rates: {
    daily?: number;
    dailyDelivered?: number;
    weekly?: number;
    twoWeek?: number;
    monthly?: number;
    customPricingNote?: string;
  };
  attachments: EquipmentAttachment[];
  specifications: EquipmentSpec[];
  includedEquipment: string[];
  recommendedUses: string[];
  deliveryInfo: string;
  primaryImage: string;
  imageAltText: string;
  availabilityLabel: "Available Now" | "Limited Availability" | "Call for Schedule";
  seoTitle: string;
  metaDescription: string;
  pageHeading: string;
  faqs: EquipmentFaq[];
  relatedEquipmentSlugs: string[];
  pricingDiscrepancyNote?: string;
}

export const EQUIPMENT_CATALOG: EquipmentItem[] = [
  {
    id: "bobcat-e26",
    name: "2023 Bobcat E26 Mini Excavator (Open Cab)",
    shortName: "Bobcat E26 Mini Excavator",
    slug: "bobcat-e26-mini-excavator",
    brand: "Bobcat",
    model: "E26",
    year: "2023",
    category: "Excavators",
    shortDescription: "Compact 2.6-ton excavator with hydraulic thumb, perfect for trenching, footing, stump removal, and tight-quarter excavation.",
    longDescription: "The 2023 Bobcat E26 Mini Excavator is built for tough digging tasks where precision and power are paramount. Featuring an open cab for maximum field visibility, hydraulic thumb for gripping debris/logs, and twin buckets (24-inch tooth bucket and smooth grading bucket), this machine makes fast work of trenching, land clearing, drainage installation, and demolition projects across Pensacola.",
    rates: {
      daily: 375,
      weekly: 1150,
      monthly: 2600,
    },
    attachments: [
      { name: "24\" Tooth Bucket", included: true },
      { name: "Smooth Grading Bucket", included: true },
      { name: "Hydraulic Thumb", included: true },
    ],
    specifications: [
      { label: "Cab Type", value: "Open Canopy / ROPS" },
      { label: "Operating Weight", value: "Approx. 5,690 lbs" },
      { label: "Included Buckets", value: "24\" Tooth Bucket & Smooth Bucket" },
      { label: "Hydraulic Thumb", value: "Factory Fitted Hydraulic Thumb Included" },
      { label: "Delivery", value: "Free delivery within 20 miles of Pensacola" },
    ],
    includedEquipment: [
      "24-inch Heavy Duty Tooth Bucket",
      "Smooth Cleanup / Grading Bucket",
      "Hydraulic Thumb Attachment",
      "Full Tank of Diesel Fuel upon delivery",
    ],
    recommendedUses: [
      "Footing and foundation digging",
      "Utility trenching & pipe laying",
      "Stump, root, and brush removal",
      "Retaining wall site preparation",
      "Drainage ditch creation",
    ],
    deliveryInfo: "Rate includes professional drop-off and pick-up within 20 miles of Pensacola, FL. Extended Panhandle delivery available for a nominal mileage fee.",
    primaryImage: "https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/Untitled-1000-x-1000-px.png",
    imageAltText: "2023 Bobcat E26 Mini Excavator with open cab and hydraulic thumb",
    availabilityLabel: "Available Now",
    seoTitle: "Bobcat E26 Mini Excavator Rental Pensacola FL | Pensacola Equipment Rentals",
    metaDescription: "Rent a 2023 Bobcat E26 Mini Excavator with hydraulic thumb and dual buckets in Pensacola, FL. Fast delivery to job sites. Daily, weekly & monthly rates.",
    pageHeading: "2023 Bobcat E26 Mini Excavator Rental in Pensacola",
    faqs: [
      {
        question: "Does the Bobcat E26 excavator come with buckets?",
        answer: "Yes! Every rental includes both a 24-inch tooth bucket for heavy digging and root cutting, as well as a smooth bucket for clean grading."
      },
      {
        question: "Is the hydraulic thumb included in the base rental price?",
        answer: "Yes, the factory hydraulic thumb is fully installed and included at no extra charge."
      },
      {
        question: "How far do you deliver the excavator?",
        answer: "Our standard rental rate includes delivery and pickup within 20 miles of Pensacola. We also deliver farther across Gulf Breeze, Milton, and Navarre for a small fee."
      }
    ],
    relatedEquipmentSlugs: ["bobcat-t66-skid-steer", "kubota-svl-skid-steer", "iron-bull-dump-trailer"],
  },
  {
    id: "bobcat-t66",
    name: "2023 Bobcat T66 Enclosed Cab Skid Steer",
    shortName: "Bobcat T66 Skid Steer",
    slug: "bobcat-t66-skid-steer",
    brand: "Bobcat",
    model: "T66",
    year: "2023",
    category: "Skid Steers",
    shortDescription: "Enclosed cab track loader with AC/heat. High-horsepower skid steer engineered for heavy grading, dirt moving, and land clearing.",
    longDescription: "The 2023 Bobcat T66 Enclosed Cab Track Loader offers incredible lifting capacity, pushing power, and all-weather operator comfort with air conditioning and heating. Ideal for earthmoving, lot grading, brush clearing, and material transport across sandy Florida Panhandle soils.",
    rates: {
      daily: 400,
      weekly: 1500,
      monthly: 3500,
    },
    attachments: [
      { name: "Standard Smooth Dirt Bucket", included: true },
      { name: "Heavy-Duty Grapple Bucket", included: false, dailyRate: 125, weeklyRate: 225, monthlyRate: 425 },
      { name: "Pallet Forks", included: false, dailyRate: 30, weeklyRate: 55, monthlyRate: 150 },
    ],
    specifications: [
      { label: "Cab Environment", value: "Enclosed Cab with Climate Control (AC / Heat)" },
      { label: "Undercarriage", value: "Rubber Tracks for minimal ground pressure & high traction" },
      { label: "Bucket Included", value: "Standard Smooth Dirt / Material Bucket" },
      { label: "Optional Attachments", value: "Root Grapple Bucket & Industrial Pallet Forks" },
      { label: "Delivery", value: "Includes pickup & delivery within 20 miles" },
    ],
    includedEquipment: [
      "Standard Dirt Bucket",
      "Enclosed Cab with AC / Heating",
      "High-Flow Hydraulics for attachments",
    ],
    recommendedUses: [
      "Land clearing & brush removal",
      "Yard grading and dirt leveling",
      "Driveway gravel spreading",
      "Pallet & heavy material transport",
      "Demolition cleanup",
    ],
    deliveryInfo: "Includes prompt drop-off and pickup within 20 miles of Pensacola, FL.",
    primaryImage: "https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/Pensacola-Equipment-1-2.png",
    imageAltText: "2023 Bobcat T66 enclosed cab track skid steer loader",
    availabilityLabel: "Available Now",
    seoTitle: "Bobcat T66 Skid Steer Rental Pensacola FL | Pensacola Equipment Rentals",
    metaDescription: "Rent a 2023 Bobcat T66 enclosed cab track loader in Pensacola, FL. Air conditioned cab, grapple bucket & fork options. Daily, weekly & monthly rates.",
    pageHeading: "2023 Bobcat T66 Skid Steer Rental in Pensacola",
    faqs: [
      {
        question: "Is the Bobcat T66 cab climate controlled?",
        answer: "Yes, it features a fully enclosed cab with working air conditioning and heating to keep you comfortable in any weather."
      },
      {
        question: "Can I rent a grapple bucket or forks with this skid steer?",
        answer: "Absolutely! We offer heavy-duty root grapple buckets ($125/day) and pallet forks ($30/day) as optional add-ons."
      }
    ],
    relatedEquipmentSlugs: ["kubota-svl-skid-steer", "bobcat-e26-mini-excavator", "iron-bull-dump-trailer"],
  },
  {
    id: "kubota-svl",
    name: "Kubota SVL Enclosed Cab Track Skid Steer",
    shortName: "Kubota SVL Skid Steer",
    slug: "kubota-svl-skid-steer",
    brand: "Kubota",
    model: "SVL Series",
    category: "Skid Steers",
    shortDescription: "Heavy-duty enclosed cab rubber track loader providing outstanding breakout force, pushing power, and stability.",
    longDescription: "The Kubota SVL Enclosed Cab Track Loader is legendary for its raw hydraulic pushing power and comfortable operator station. Built to conquer heavy dirt work, brush clearing, site prep, and gravel driveway installation with ease.",
    rates: {
      daily: 400,
      weekly: 1500,
      monthly: 3500,
    },
    attachments: [
      { name: "Standard Dirt Bucket", included: true },
      { name: "Grapple Bucket", included: false, dailyRate: 125, weeklyRate: 225, monthlyRate: 425 },
      { name: "Pallet Forks", included: false, dailyRate: 30, weeklyRate: 55, monthlyRate: 150 },
    ],
    specifications: [
      { label: "Cab Type", value: "Enclosed Cab with AC / Heat" },
      { label: "Tracks", value: "Wide Rubber Tracks for Florida Sand Traction" },
      { label: "Included Attachment", value: "Standard Dirt Bucket" },
      { label: "Optional Attachments", value: "Grapple Bucket & Pallet Forks" },
    ],
    includedEquipment: [
      "Standard Dirt Bucket",
      "Climate Controlled Cab",
    ],
    recommendedUses: [
      "Heavy dirt excavation & grading",
      "Lot clearing & vegetation removal",
      "Loading dump trailers & trucks",
      "Moving bulk mulch, stone, and topsoil",
    ],
    deliveryInfo: "Delivered straight to your residence or work site within 20 miles of Pensacola.",
    primaryImage: "https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/Untitled-design-3.png",
    imageAltText: "Kubota SVL Series enclosed cab track skid loader",
    availabilityLabel: "Available Now",
    seoTitle: "Kubota SVL Skid Steer Rental Pensacola FL | Pensacola Equipment Rentals",
    metaDescription: "Rent a Kubota SVL enclosed cab track skid steer in Pensacola, FL. Powerful hydraulics for land clearing & grading. Delivery available.",
    pageHeading: "Kubota SVL Skid Steer Rental in Pensacola",
    faqs: [
      {
        question: "How does the Kubota SVL compare to the Bobcat T66?",
        answer: "Both machines offer enclosed cabs with AC and exceptional track traction. The Kubota SVL is highly favored for heavy breakout force and smooth pilot control."
      }
    ],
    relatedEquipmentSlugs: ["bobcat-t66-skid-steer", "bobcat-e26-mini-excavator", "iron-bull-dump-trailer"],
  },
  {
    id: "iron-bull-dump-trailer",
    name: "2022 Iron Bull 7' x 14' x 3' Hydraulic Dump Trailer",
    shortName: "Iron Bull Dump Trailer",
    slug: "iron-bull-dump-trailer",
    brand: "Iron Bull",
    model: "7x14x3",
    year: "2022",
    category: "Trailers",
    shortDescription: "Heavy-duty 14-foot tandem axle hydraulic dump trailer with 3-foot sides. Perfect for hauling dirt, debris, roofing, and equipment.",
    longDescription: "The 2022 Iron Bull 7ft x 14ft x 3ft Hydraulic Dump Trailer is engineered for heavy hauling. Featuring 3-foot high steel sides, electric hydraulic scissor lift, tarp kit, and heavy-duty ramps, it makes hauling trash, yard debris, gravel, and construction materials effortless.",
    rates: {
      daily: 175,
      dailyDelivered: 275,
      weekly: 600,
      monthly: 1350,
      customPricingNote: "Day Rental self-tow: $175 | Day Rental delivered by us: $275. TODO: Confirm weekly rate ($600 on homepage vs $275 on equipment page).",
    },
    attachments: [
      { name: "Integrated Roll-Tarp System", included: true },
      { name: "Heavy-Duty Equipment Loading Ramps", included: true },
    ],
    specifications: [
      { label: "Dimensions", value: "7 Feet Wide x 14 Feet Long x 3 Feet High Sides" },
      { label: "Hoist Mechanism", value: "Electric Hydraulic Scissor Lift" },
      { label: "Features", value: "Tarp Kit, Combo Barn Doors & Spreader Gate, Ramps" },
      { label: "Self-Tow Rate", value: "$175/day (Requires suitable tow vehicle & 2-5/16\" ball)" },
      { label: "Delivered Rate", value: "$275/day (We drop off, you load, we haul away)" },
    ],
    includedEquipment: [
      "Built-in Tarp Assembly",
      "Rear Loading Ramps for equipment",
      "Spare Tire & Heavy Duty Jack",
    ],
    recommendedUses: [
      "Roofing tear-off & construction debris disposal",
      "Yard cleanup & tree branch hauling",
      "Gravel, sand, & dirt delivery",
      "Hauling small lawn mowers or skid steers",
    ],
    deliveryInfo: "Rent for self-towing ($175/day) or request our delivery & haul-away service ($275/day) within 20 miles of Pensacola.",
    primaryImage: "https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/Untitled-design-4.png",
    imageAltText: "2022 Iron Bull 7 by 14 foot hydraulic dump trailer",
    availabilityLabel: "Available Now",
    seoTitle: "Dump Trailer Rental Pensacola FL | 7x14 Iron Bull | Pensacola Equipment Rentals",
    metaDescription: "Rent a 7'x14' Iron Bull hydraulic dump trailer in Pensacola, FL. Self-tow or full delivery & pickup service. Ideal for dirt, roof, and yard debris.",
    pageHeading: "2022 Iron Bull 7' x 14' Hydraulic Dump Trailer Rental",
    faqs: [
      {
        question: "Can I haul the dump trailer myself?",
        answer: "Yes! If you have a properly rated truck with a 2-5/16\" ball hitch and brake controller, self-tow rentals are $175/day."
      },
      {
        question: "What if I don't have a truck to tow it?",
        answer: "We offer a turnkey delivery service ($275/day) where we bring the trailer to your site, leave it for you to load, and then pick it up to dump."
      }
    ],
    relatedEquipmentSlugs: ["bobcat-e26-mini-excavator", "bobcat-t66-skid-steer", "gravely-zero-turn-mower"],
    pricingDiscrepancyNote: "TODO: Owner confirmation required for weekly dump trailer pricing ($600 on homepage vs $275 on equipment catalog page).",
  },
  {
    id: "gravely-pro-turn",
    name: "Gravely Pro-Turn Zero-Turn Riding Mower",
    shortName: "Gravely Zero Turn Mower",
    slug: "gravely-zero-turn-mower",
    brand: "Gravely",
    model: "Pro-Turn Series",
    category: "Mowers",
    shortDescription: "Commercial-grade zero-turn lawn mower designed for fast, precise mowing of large residential lots and commercial properties.",
    longDescription: "The Gravely Pro-Turn Commercial Zero-Turn Riding Mower delivers high-speed mowing performance, a clean cut, and ultimate operator comfort. Ideal for tackling overgrown acreage, commercial grounds maintenance, and residential lawn overhauls.",
    rates: {
      daily: 200,
      weekly: 500,
      twoWeek: 800,
      customPricingNote: "Note: No rentals permitted past 2 weeks.",
    },
    attachments: [
      { name: "Commercial Cutting Deck", included: true },
    ],
    specifications: [
      { label: "Machine Type", value: "Commercial Zero-Turn Riding Mower" },
      { label: "Max Rental Duration", value: "Up to 2 Weeks (No rentals past 14 days)" },
      { label: "Delivery", value: "Includes drop-off & pick-up within 20 miles of Pensacola" },
    ],
    includedEquipment: [
      "Full tank of fuel upon delivery",
    ],
    recommendedUses: [
      "Mowing large residential acreage",
      "Commercial property maintenance",
      "Overgrown grass knock-down",
    ],
    deliveryInfo: "Prices include drop-off and pick-up within 20 miles of Pensacola, FL.",
    primaryImage: "https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/992511_PT-560_60_FR34.png",
    imageAltText: "Gravely Pro-Turn commercial zero turn riding lawn mower",
    availabilityLabel: "Available Now",
    seoTitle: "Zero Turn Mower Rental Pensacola FL | Gravely Commercial Mower",
    metaDescription: "Rent a Gravely Pro-Turn commercial zero-turn lawn mower in Pensacola, FL. Fast delivery to your home or property. Daily & weekly rental options.",
    pageHeading: "Gravely Zero-Turn Mower Rental in Pensacola",
    faqs: [
      {
        question: "Can I rent the mower for a month?",
        answer: "The Gravely Pro-Turn mower is available for daily ($200), weekly ($500), and 2-week ($800) rentals. We do not offer rentals past 2 weeks for this machine."
      }
    ],
    relatedEquipmentSlugs: ["iron-bull-dump-trailer", "stihl-backpack-sprayer", "stihl-chainsaw"],
  },
  {
    id: "stihl-sprayer",
    name: "Stihl Manual Backpack Sprayer (SG 20)",
    shortName: "Stihl Backpack Sprayer",
    slug: "stihl-backpack-sprayer",
    brand: "Stihl",
    model: "SG 20",
    category: "Lawn & Hand Tools",
    shortDescription: "Lightweight, durable backpack chemical sprayer with ergonomic harness for herbicide, pesticide, and fertilizer application.",
    longDescription: "Lightweight and durable, the Stihl SG 20 backpack sprayer delivers consistent pressure and comfort—ideal for precise spot treatments and large-area spraying for landscaping professionals and property owners.",
    rates: {
      customPricingNote: "Call or text 850-407-6566 for current rates and bundle discounts.",
    },
    attachments: [],
    specifications: [
      { label: "Capacity", value: "High-capacity fluid reservoir with pressurized pump handle" },
      { label: "Harness", value: "Padded shoulder straps for ergonomic all-day comfort" },
    ],
    includedEquipment: [
      "Spray wand and adjustable nozzle tip",
    ],
    recommendedUses: [
      "Fence line weed control",
      "Lawn fertilizer & weed treatment",
      "Brush & poison ivy spraying",
    ],
    deliveryInfo: "Available for pickup or local delivery when bundled with equipment.",
    primaryImage: "https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/Untitled-design-6.png",
    imageAltText: "Stihl SG 20 manual backpack sprayer for landscaping",
    availabilityLabel: "Available Now",
    seoTitle: "Stihl Backpack Sprayer Rental Pensacola FL | Pensacola Equipment Rentals",
    metaDescription: "Rent a Stihl SG 20 manual backpack sprayer in Pensacola, FL. Ideal for weed control, fertilizing, and property spraying. Call for daily rates.",
    pageHeading: "Stihl Backpack Sprayer Rental",
    faqs: [
      {
        question: "How do I get pricing for the backpack sprayer?",
        answer: "Call or text us directly at 850-407-6566 for daily rates or bundle discounts when rented alongside a skid steer or mower."
      }
    ],
    relatedEquipmentSlugs: ["stihl-chainsaw", "gravely-zero-turn-mower"],
  },
  {
    id: "stihl-chainsaw",
    name: "Stihl Gas Powered Chainsaw",
    shortName: "Stihl Chainsaw",
    slug: "stihl-chainsaw",
    brand: "Stihl",
    model: "Professional Series",
    category: "Lawn & Hand Tools",
    shortDescription: "Reliable, high-torque Stihl gas chainsaw for tree limb trimming, storm cleanup, and firewood cutting.",
    longDescription: "This reliable Stihl chainsaw offers powerful cutting performance in a lightweight design. Perfect for cutting firewood, tree trimming, land clearing, and storm cleanup across Pensacola and the Panhandle.",
    rates: {
      customPricingNote: "Call or text 850-407-6566 for current daily rates.",
    },
    attachments: [],
    specifications: [
      { label: "Engine", value: "Stihl 2-Stroke High Torque Gas Engine" },
      { label: "Safety Features", value: "Quickstop chain brake mechanism" },
    ],
    includedEquipment: [
      "Sharp cutting chain installed",
      "Chain bar cover guard",
    ],
    recommendedUses: [
      "Storm damage tree cleanup",
      "Firewood cutting & bucking",
      "Tree limb trimming & removal",
    ],
    deliveryInfo: "Available for pickup or bundled local jobsite delivery.",
    primaryImage: "https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/Untitled-design-8.png",
    imageAltText: "Stihl gas-powered heavy duty chainsaw",
    availabilityLabel: "Available Now",
    seoTitle: "Stihl Chainsaw Rental Pensacola FL | Pensacola Equipment Rentals",
    metaDescription: "Rent a powerful Stihl gas chainsaw in Pensacola, FL for tree trimming, storm cleanup, and land clearing. Call 850-407-6566 for rental rates.",
    pageHeading: "Stihl Chainsaw Rental in Pensacola",
    faqs: [
      {
        question: "Is safety gear recommended when operating the chainsaw?",
        answer: "Yes, we strongly recommend wearing eye protection, ear protection, and heavy work gloves when operating power saws."
      }
    ],
    relatedEquipmentSlugs: ["stihl-backpack-sprayer", "bobcat-e26-mini-excavator"],
  },
];

export function getEquipmentBySlug(slug: string): EquipmentItem | undefined {
  return EQUIPMENT_CATALOG.find((item) => item.slug === slug);
}

export function getRelatedEquipment(slugs: string[]): EquipmentItem[] {
  return EQUIPMENT_CATALOG.filter((item) => slugs.includes(item.slug));
}
