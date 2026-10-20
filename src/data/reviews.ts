export interface Review {
  name: string;
  role: string;
  location: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Mark S.",
    role: "General Contractor",
    location: "Pensacola, FL",
    text: "Great local father and son team! They delivered the Bobcat E26 excavator right on time for our foundation project. The hydraulic thumb made tree root removal effortless. Machine operated flawlessly.",
  },
  {
    name: "David L.",
    role: "Homeowner",
    location: "Gulf Breeze, FL",
    text: "Rented the Iron Bull dump trailer to haul storm debris around our yard. Super smooth drop-off and pickup. Transparent pricing with no surprise fees.",
  },
  {
    name: "Robert T.",
    role: "Property Owner",
    location: "Milton, FL",
    text: "We hired Pensacola Equipment Rentals for brush clearing on a 2-acre lot. They completed it fast and cleared everything down to dirt. Excellent family-owned service.",
  },
  {
    name: "Chris M.",
    role: "Landscaping Specialist",
    location: "Navarre, FL",
    text: "The Kubota SVL track skid steer was clean, tight, and delivered with a full tank. We will definitely be renting from them for future Panhandle site prep jobs.",
  },
];
