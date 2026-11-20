import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BUSINESS_INFO } from "@/data/business";

/* The text of the WordPress /privacy-policy/ page (last updated June 15th,
   2025), kept at the same URL. Contact details come from BUSINESS_INFO so the
   phone matches the rest of the site (the WordPress page listed 850-637-4442).
   Section 1 on WordPress listed "solar sales, installations, consultations",
   copied from another business; it now names this business's services. */
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and terms of service for Pensacola Equipment Rentals, an equipment rental and land clearing company in Pensacola, FL.",
  alternates: { canonical: "https://www.bnbcoastalcuts.com/privacy-policy/" },
};

const LAST_UPDATED = "June 15th, 2025";

const INTRO = "Welcome to Pensacola Equipment Rentals. By accessing or using our services, you agree to comply with and be bound by these Terms of Service (“Terms”). If you do not agree with these Terms, please do not use our Website or services.";

const SECTIONS: { heading: string; paragraphs: string[] }[] = [
  {
    "heading": "1. Agreement to Terms",
    "paragraphs": [
      "These Terms govern your access to and use of the Website https://www.bnbcoastalcuts.com/ and any services provided by Pensacola Equipment Rentals, including equipment rental (mini excavators, skid steers and track loaders, dump trailers, zero-turn mowers, chainsaws and backpack sprayers), equipment delivery and pickup, land clearing, and related services. By submitting information or contacting us through our Website, you agree to these Terms."
    ]
  },
  {
    "heading": "2. Services Provided",
    "paragraphs": [
      "Pensacola Equipment Rentals provides equipment rental services for residential, commercial, and industrial use. Our offerings include, but are not limited to: the rental of construction equipment, land clearing machinery, and related tools. We also provide delivery, pickup, and basic operational guidance for all rented equipment. In some cases, we may offer optional services such as on-site land clearing or light maintenance. Additional services may be introduced or modified from time to time as our business evolves."
    ]
  },
  {
    "heading": "3. Use of Our Website",
    "paragraphs": [
      "You may use our Website for lawful purposes and in accordance with these Terms. You agree not to: Use the Website to violate any applicable laws or regulations. Upload or transmit harmful code (viruses, malware, etc.). Interfere with or disrupt the Website’s functionality or security."
    ]
  },
  {
    "heading": "4. Privacy and Data Collection",
    "paragraphs": [
      "By using our Website, you acknowledge that we collect personal information through forms and communications, as described in our Privacy Policy. You agree to provide accurate and complete information when interacting with our services and forms."
    ]
  },
  {
    "heading": "5. Opt-In Communications",
    "paragraphs": [
      "By submitting a form or providing contact information, you consent to receiving communications from Pensacola Equipment Rentals regarding products, services, and promotions. You can opt out of these communications at any time by following the opt-out instructions in our emails or by contacting us directly."
    ]
  },
  {
    "heading": "6. Pricing and Payments",
    "paragraphs": [
      "Prices for services and products will be provided as part of a quote or consultation. Any payment terms, including deposit requirements and payment schedules, will be outlined in a separate agreement or contract specific to the service provided.",
      "All payments are due in accordance with the agreed-upon terms. Late payments may be subject to additional charges or fees as specified in the agreement."
    ]
  },
  {
    "heading": "7. Intellectual Property",
    "paragraphs": [
      "All content on our Website, including text, graphics, logos, and images, is the property of Pensacola Equipment Rentals and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from the Website without our express written permission."
    ]
  },
  {
    "heading": "8. Limitation of Liability",
    "paragraphs": [
      "To the fullest extent permitted by law, Pensacola Equipment Rentals is not liable for any damages arising from your use of the Website or our services, including, but not limited to, any loss of data, revenue, or profits, or any indirect, incidental, or consequential damages. Our total liability will be limited to the amount paid by you for the specific service in question."
    ]
  },
  {
    "heading": "9. Warranty Disclaimer",
    "paragraphs": [
      "Pensacola Equipment Rentals does not warrant that the services provided will meet your specific requirements or be uninterrupted or error-free. We make no representations or warranties of any kind, express or implied, regarding the operation of our services or the information, content, or materials included on the Website."
    ]
  },
  {
    "heading": "10. Indemnification",
    "paragraphs": [
      "You agree to indemnify and hold harmless Pensacola Equipment Rentals, its officers, employees, and agents from any claims, damages, or liabilities arising out of your use of the Website or services, including any violation of these Terms."
    ]
  },
  {
    "heading": "11. Termination of Services",
    "paragraphs": [
      "We may suspend or terminate your access to the Website and services at any time for any reason, including if you violate these Terms. You may also terminate your relationship with us by contacting us and discontinuing the use of our Website and services."
    ]
  },
  {
    "heading": "12. Governing Law and Dispute Resolution",
    "paragraphs": [
      "These Terms will be governed by and construed in accordance with the laws of the state of Florida, without regard to its conflict of law principles. Any disputes arising under or in connection with these Terms shall be resolved in the courts located in Pensacola, Florida."
    ]
  },
  {
    "heading": "13. Changes to These Terms",
    "paragraphs": [
      "We reserve the right to modify or update these Terms at any time. Any changes will be posted on this page with a revised “Last Updated” date. By continuing to use our Website or services, you agree to be bound by the updated Terms."
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last Updated: ${LAST_UPDATED}`}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]}
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="container max-w-3xl space-y-10 text-[1.0625rem] leading-relaxed text-gray-700">
          <p>{INTRO}</p>
          {SECTIONS.map((section) => (
            <div key={section.heading} className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-brand-black">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          ))}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-brand-black">14. Contact Us</h2>
            <p>If you have any questions or concerns about these Terms of Service, please contact us:</p>
            <address className="not-italic">
              {BUSINESS_INFO.address.formatted}
              <br />
              Phone:{" "}
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-brand-blue hover:text-brand-red">
                {BUSINESS_INFO.phone}
              </a>
              <br />
              Email:{" "}
              <a href={`mailto:${BUSINESS_INFO.email}`} className="font-semibold text-brand-blue hover:text-brand-red">
                {BUSINESS_INFO.email}
              </a>
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
