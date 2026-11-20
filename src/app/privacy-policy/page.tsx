import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { BUSINESS_INFO } from "@/data/business";

/* DRAFT — PENDING OWNER REVIEW. Not approved by the business owner and not
   legal advice. It replaces the WordPress /privacy-policy/ text, which was a
   Terms of Service copied from another business.

   Written from what this codebase actually does — re-check this page whenever
   any of these change:
   - Quote form (src/components/QuoteForm.tsx -> src/app/api/quote/route.ts):
     name, phone, email, equipment/service, start date, duration, preferred
     contact method, delivery address or ZIP, project details. Emailed through
     Resend from send.compassmarketing.ai to QUOTE_RECIPIENT (default: the
     business inbox and Compass Marketing). No database; nothing stored by the
     site. The visitor's IP is held in server memory for a 10-minute rate limit.
     When GHL_WEBHOOK_URL is set, the same fields are also sent to the
     business's GoHighLevel account (CRM, texts and email follow-up); the
     paragraph below about GoHighLevel only renders then. Env changes need a
     redeploy for this static page to pick them up.
   - Google Analytics 4 only when NEXT_PUBLIC_GA_ID is set (src/lib/analytics.ts,
     src/components/Analytics.tsx): page views, `phone_click`, `form_submit`
     (form name, equipment, duration — no contact details).
   - Google Maps embed on /contact/. Fonts are self-hosted. No localStorage,
     no first-party cookies, no accounts, no payments, hosted on Vercel.

   Keep the page indexable like the site's other pages. Update EFFECTIVE_DATE
   once the owner approves the text. */
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Pensacola Equipment Rentals collects, uses and shares the information you give us through our website, including quote requests.",
  alternates: { canonical: "https://www.bnbcoastalcuts.com/privacy-policy/" },
};

const EFFECTIVE_DATE = "Draft — pending owner review";

const link = "font-semibold text-brand-blue hover:text-brand-red";

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
  const usesGhl = Boolean(process.env.GHL_WEBHOOK_URL?.trim());
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Effective date: ${EFFECTIVE_DATE}`}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]}
      />
      <section className="bg-white py-16 lg:py-24">
        <div className="container max-w-3xl space-y-10 text-[1.0625rem] leading-relaxed text-gray-700">
          <p>
            {name} is a locally owned equipment rental and land clearing business in Pensacola, Florida. This page
            explains what information our website collects, what we do with it, and who else sees it. It covers this
            website only. Rental agreements and anything you sign with us in person are separate.
          </p>

          <Section title="Information you give us">
            <p>
              When you send a quote request through the form on our website, we ask for your name, phone number,
              email address, the equipment or service you want, your start date and rental length, how you prefer to
              be contacted, your delivery address or ZIP code, and any project details you choose to add.
            </p>
            <p>
              If you call, text or email us using the phone number or email links on the site, your phone or email
              app handles that contact, and we receive whatever you send us the same way we would from any other
              call, text or email.
            </p>
            <p>
              The website has no customer accounts, no log-ins and no online payments.
            </p>
          </Section>

          <Section title="How we use it">
            <p>
              We use your information to answer your request: to check availability, give you a price, arrange
              delivery and pickup, schedule land clearing work, and follow up about that request by the method you
              chose. We don&apos;t sign you up for a newsletter through the form. If you would rather we didn&apos;t
              contact you again, tell us and we&apos;ll stop.
            </p>
          </Section>

          <Section title="Who receives your quote request">
            <p>
              The website itself does not store quote requests in a database. When you press submit, the details are sent as
              an email to {name} and to our marketing agency, Compass Marketing, which builds and runs this website for
              us and makes sure requests arrive. The email is delivered through Resend, an email delivery service.
              Our inbox is hosted by Google (Gmail).
            </p>
            {usesGhl && (
              <p>
                Your request is also added to our customer management system, GoHighLevel, where we keep a record of
                the request and may send you text messages or emails about it by the contact method you chose. You can
                reply STOP to any text from us to stop further texts.
              </p>
            )}
            <p>
              These providers handle the information only to {usesGhl ? "deliver, store and manage those requests" : "deliver and store those emails"}, under their own privacy
              policies.
            </p>
          </Section>

          <Section title="Information collected automatically">
            <p>
              Our website is hosted by Vercel. Like most web hosts, Vercel&apos;s servers record basic technical
              details of each visit, such as your IP address, browser type, the page requested and the time, to
              deliver the site and keep it secure.
            </p>
            <p>
              To stop automated spam, the quote form briefly checks how many requests have come from your IP address.
              That count is held in the server&apos;s memory for about ten minutes and is not saved by the website.
            </p>
            <p>
              <strong className="text-brand-black">Google Analytics (if enabled).</strong> We may use Google
              Analytics to understand how people find and use the site. When it is turned on, Google Analytics uses
              cookies and similar technology to collect information such as the pages you visit, how you arrived,
              your device and browser, and your approximate location. We also record when someone taps one of our
              phone links (which number and which link) and when a quote form is sent (which equipment and rental
              length). We do not send your name, phone number, email address or delivery address to Google
              Analytics. You can block analytics cookies in your browser settings or with Google&apos;s{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" className={link} rel="noopener noreferrer">
                opt-out browser add-on
              </a>
              .
            </p>
          </Section>

          <Section title="Cookies and maps">
            <p>
              Our own website does not set cookies or save anything in your browser&apos;s storage. Fonts and images
              are served from our own site. The{" "}
              <Link href="/contact/" className={link}>
                contact page
              </Link>{" "}
              shows an embedded Google Map, and links to directions open Google Maps; Google may set its own cookies
              when the map loads or when you use those links. If Google Analytics is turned on (see above), it sets
              cookies too.
            </p>
          </Section>

          <Section title="What we don't do">
            <p>
              We do not sell your personal information, and we do not share it with other businesses for their own
              advertising.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              Quote request emails stay in the inboxes they were sent to until they are deleted, and the email delivery
              service keeps its own delivery records for a limited time. We keep quote requests as long as we need them
              to handle your rental or job and for ordinary business records. You can ask us to delete yours at any
              time.
            </p>
          </Section>

          <Section title="Your choices">
            <p>
              You can ask us what information we have from you, ask us to correct it, or ask us to delete it, by
              calling, texting or emailing us using the details below. We may need to confirm it&apos;s you before
              making changes, and we may keep records we are required to keep, such as those tied to a completed
              rental.
            </p>
          </Section>

          <Section title="Children">
            <p>
              Our website is meant for adults arranging equipment rentals and land clearing work. It is not directed
              to children under 13, and we do not knowingly collect information from them.
            </p>
          </Section>

          <Section title="Security">
            <p>
              The website is served over an encrypted (HTTPS) connection, and quote requests are sent by email rather
              than stored on the website. No website or email system is completely secure, so please don&apos;t include
              payment card numbers or other sensitive details in the form.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              If we change how the website handles information, we will update this page and the effective date at the
              top.
            </p>
          </Section>

          <Section title="Contact us">
            <p>Questions about this policy or your information:</p>
            <address className="not-italic">
              {name}
              <br />
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
