import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { BUSINESS_INFO } from "@/data/business";

/* The text of the WordPress /privacy-policy/ page (last updated there June 15,
   2025), copied at the agency's request in Nov 2026. Two corrections only:
   - section 1 no longer lists "solar sales, installations, consultations"
     (left over from another business's template);
   - the contact phone is 850-407-6566, not the retired 850-637-4442.
   Note: this text is a Terms of Service. A privacy policy written from what
   the Next.js site actually does (quote form via Resend, optional GA4, Google
   Maps embed, Vercel hosting) was drafted in commit 4e38146 and can be
   restored from git history if the owner wants a true privacy policy (e.g.
   for GoHighLevel SMS / A2P 10DLC registration). */
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "The terms that apply when you use the Pensacola Equipment Rentals website and services, including how we handle the information you submit.",
  alternates: { canonical: "https://www.bnbcoastalcuts.com/privacy-policy/" },
};

const LAST_UPDATED = "November 20, 2026";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="font-heading text-2xl font-bold text-brand-black">{title}</h2>
      {children}
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const name = BUSINESS_INFO.name;
  const link = "font-semibold text-brand-blue hover:text-brand-red";
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
          <p>
            Welcome to {name}. By accessing or using our services, you agree to comply with and be bound by these Terms
            of Service (&ldquo;Terms&rdquo;). If you do not agree with these Terms, please do not use our Website or
            services.
          </p>

          <Section title="1. Agreement to Terms">
            <p>
              These Terms govern your access to and use of the Website https://www.bnbcoastalcuts.com/ and any services
              provided by {name}. By submitting information or contacting us through our Website, you agree to these
              Terms.
            </p>
          </Section>

          <Section title="2. Services Provided">
            <p>
              {name} provides equipment rental services for residential, commercial, and industrial use. Our offerings
              include, but are not limited to: the rental of construction equipment, land clearing machinery, and
              related tools. We also provide delivery, pickup, and basic operational guidance for all rented equipment.
              In some cases, we may offer optional services such as on-site land clearing or light maintenance.
              Additional services may be introduced or modified from time to time as our business evolves.
            </p>
          </Section>

          <Section title="3. Use of Our Website">
            <p>
              You may use our Website for lawful purposes and in accordance with these Terms. You agree not to: Use the
              Website to violate any applicable laws or regulations. Upload or transmit harmful code (viruses, malware,
              etc.). Interfere with or disrupt the Website&rsquo;s functionality or security.
            </p>
          </Section>

          <Section title="4. Privacy and Data Collection">
            <p>
              By using our Website, you acknowledge that we collect personal information through forms and
              communications, as described in our Privacy Policy. You agree to provide accurate and complete information
              when interacting with our services and forms.
            </p>
          </Section>

          <Section title="5. Opt-In Communications">
            <p>
              By submitting a form or providing contact information, you consent to receiving communications from{" "}
              {name} regarding products, services, and promotions. You can opt out of these communications at any time
              by following the opt-out instructions in our emails or by contacting us directly.
            </p>
          </Section>

          <Section title="6. Pricing and Payments">
            <p>
              Prices for services and products will be provided as part of a quote or consultation. Any payment terms,
              including deposit requirements and payment schedules, will be outlined in a separate agreement or contract
              specific to the service provided.
            </p>
            <p>
              All payments are due in accordance with the agreed-upon terms. Late payments may be subject to additional
              charges or fees as specified in the agreement.
            </p>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              All content on our Website, including text, graphics, logos, and images, is the property of {name} and is
              protected by intellectual property laws. You may not use, reproduce, or distribute any content from the
              Website without our express written permission.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, {name} is not liable for any damages arising from your use of the
              Website or our services, including, but not limited to, any loss of data, revenue, or profits, or any
              indirect, incidental, or consequential damages. Our total liability will be limited to the amount paid by
              you for the specific service in question.
            </p>
          </Section>

          <Section title="9. Warranty Disclaimer">
            <p>
              {name} does not warrant that the services provided will meet your specific requirements or be
              uninterrupted or error-free. We make no representations or warranties of any kind, express or implied,
              regarding the operation of our services or the information, content, or materials included on the
              Website.
            </p>
          </Section>

          <Section title="10. Indemnification">
            <p>
              You agree to indemnify and hold harmless {name}, its officers, employees, and agents from any claims,
              damages, or liabilities arising out of your use of the Website or services, including any violation of
              these Terms.
            </p>
          </Section>

          <Section title="11. Termination of Services">
            <p>
              We may suspend or terminate your access to the Website and services at any time for any reason, including
              if you violate these Terms. You may also terminate your relationship with us by contacting us and
              discontinuing the use of our Website and services.
            </p>
          </Section>

          <Section title="12. Governing Law and Dispute Resolution">
            <p>
              These Terms will be governed by and construed in accordance with the laws of the state of Florida, without
              regard to its conflict of law principles. Any disputes arising under or in connection with these Terms
              shall be resolved in the courts located in Pensacola, Florida.
            </p>
          </Section>

          <Section title="13. Changes to These Terms">
            <p>
              We reserve the right to modify or update these Terms at any time. Any changes will be posted on this page
              with a revised &ldquo;Last Updated&rdquo; date. By continuing to use our Website or services, you agree to
              be bound by the updated Terms.
            </p>
          </Section>

          <Section title="14. Contact Us">
            <p>If you have any questions or concerns about these Terms of Service, please contact us:</p>
            <address className="not-italic">
              {BUSINESS_INFO.address.formatted}
              <br />
              Phone:{" "}
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className={link}>
                {BUSINESS_INFO.phone}
              </a>
              <br />
              Email:{" "}
              <a href={`mailto:${BUSINESS_INFO.email}`} className={link}>
                {BUSINESS_INFO.email}
              </a>
            </address>
          </Section>
        </div>
      </section>
    </>
  );
}
