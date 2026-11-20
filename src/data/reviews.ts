/* Real customer reviews from the business's Google Business Profile
   (7013 Chapel St, place ID ChIJUy3ofcuwo4ERULxKJ5SvI38), copied word for word
   from the Trustindex Google widget on the WordPress site. Do not edit the
   wording, and do not add reviews that were not posted on Google. */

export interface Review {
  name: string;
  /** Month the review was posted (YYYY-MM). */
  posted: string;
  stars: number;
  text: string;
  source: "Google";
}

/** Overall Google rating. Update when the profile's numbers change. */
export const GOOGLE_RATING = {
  value: 4.9,
  count: 27,
  asOf: "2026-09",
  /** Opens the Google Business Profile, where all reviews are listed. */
  profileUrl: "https://www.google.com/maps?cid=9161359117850950736",
  writeReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJUy3ofcuwo4ERULxKJ5SvI38",
};

export const REVIEWS: Review[] = [
  {
    name: "Luke Barnhill",
    posted: "2025-05",
    stars: 5,
    source: "Google",
    text: "Was looking all over the area to rent a smaller excavator for a day and these guys had the best rates by far and that even included drop off and pickup from my house. They gave me some good tips and a good run down on how to operate everything when dropping it off as well. The excavator ran perfectly and I got the hang of it pretty quickly. Overall great experience that saved a lot of time and back-pain for a great price.",
  },
  {
    name: "Joe Napski",
    posted: "2025-05",
    stars: 5,
    source: "Google",
    text: "They delivered the equipment the night before so it was ready for me early morning. The skidsteer was perfect and got the job done easy. Would use again for sure. Also, communication was very good and timely.",
  },
  {
    name: "Waymon Hurd",
    posted: "2025-05",
    stars: 5,
    source: "Google",
    text: "I needed a backhoe and a tractor to do some land clearing. I called Pensacola Equipment Rentals and they had just what I needed and their prices were very reasonable and their equipment was good quality. I highly recommend them for any of your heavy equipment needs along with great customer service from Brian.",
  },
  {
    name: "CameRon Hogate",
    posted: "2025-05",
    stars: 5,
    source: "Google",
    text: "Not your typical rental shop thats stuck in 1971.\nExcellent communication, e-signed documents, no bs, 10/10 recommend for equipment rentals!",
  },
  {
    name: "jerry hac",
    posted: "2025-05",
    stars: 5,
    source: "Google",
    text: "Brian and staff are courteous and knowledgeable.\nGreat service at a fair price.\nHighly recommend.",
  },
  {
    name: "Stop Fire",
    posted: "2025-05",
    stars: 5,
    source: "Google",
    text: "Incredibly helpful team, easy to communicate and able to accommodate for our needs. We appreciate it and look forward to continued service!",
  },
  {
    name: "Ernesto Toranzo",
    posted: "2025-05",
    stars: 5,
    source: "Google",
    text: "Been renting equipment for about a year. This guys are amazing ! Totally recommend!",
  },
  {
    name: "Michael Witt",
    posted: "2025-05",
    stars: 5,
    source: "Google",
    text: "They have been instrumental in helping our needs. Great equipment and team, Thank you guys!",
  },
  {
    name: "Will Adams",
    posted: "2025-05",
    stars: 5,
    source: "Google",
    text: "It's the best equipment rental company in Northwest Florida",
  },
  {
    name: "Alvon Colston",
    posted: "2025-05",
    stars: 5,
    source: "Google",
    text: "Great prices, service and communication",
  },
];

/** The four shown on the homepage. */
export const FEATURED_REVIEWS = REVIEWS.slice(0, 4);

export function formatPosted(posted: string): string {
  const [y, m] = posted.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
}
