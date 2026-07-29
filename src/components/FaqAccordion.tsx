"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    question: "Who can rent equipment from Pensacola Equipment Rentals?",
    answer: "We rent to both commercial contractors (builders, landscapers, utility crews) and DIY homeowners! Whether you need a mini excavator for a weekend backyard project or a skid steer for a multi-week job site, we're here to help.",
  },
  {
    question: "How does equipment delivery work and how much does it cost?",
    answer: "Our standard daily, weekly, and monthly rates include drop-off and pickup within 20 miles of Pensacola, FL. If your job site is located farther away in Gulf Breeze, Milton, Navarre, or surrounding Panhandle areas, we can deliver for a small additional mileage fee.",
  },
  {
    question: "What rental duration options do you offer?",
    answer: "We offer flexible daily, weekly, and monthly rates for most machines. For small hand tools or specialty lawn mowers, custom durations are available. All rentals come with transparent pricing and clear rental terms.",
  },
  {
    question: "What is required to rent equipment?",
    answer: "Renting is quick and straightforward. You'll need a valid photo ID, signed rental agreement, and credit/debit card for payment. If self-towing a dump trailer, a properly equipped tow vehicle with 2-5/16\" hitch ball and brake controller is required.",
  },
  {
    question: "Are attachments included with mini excavators and skid steers?",
    answer: "Yes! The Bobcat E26 mini excavator includes a 24\" tooth bucket, smooth grading bucket, and hydraulic thumb at no extra charge. For skid steers, standard dirt buckets are included, and specialized attachments like root grapple buckets ($125/day) or pallet forks ($30/day) are available as add-ons.",
  },
  {
    question: "Do you offer brush clearing or full land clearing services?",
    answer: "Yes! In addition to equipment rentals, we offer complete turnkey brush clearing and land clearing services. If you prefer to have an experienced operator handle the job for you, simply request a land clearing quote.",
  },
  {
    question: "What happens if equipment experiences an issue during my rental?",
    answer: "If you experience any operational issues on your job site, call or text us immediately at 850-407-6566. As a local family business, we troubleshoot or swap equipment fast to minimize downtime and keep your project moving.",
  },
];

interface FaqAccordionProps {
  faqs?: FaqItem[];
  title?: string;
  subtitle?: string;
}

export function FaqAccordion({ faqs = DEFAULT_FAQS, title = "Frequently Asked Questions", subtitle = "Got questions about equipment rentals, delivery, or land clearing? We've got answers." }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-brand-black py-20 border-b border-brand-surface-border">
      <div className="container max-w-4xl space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-yellow">
            <HelpCircle className="h-4 w-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="text-sm text-gray-400">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-brand-surface-border bg-brand-charcoal overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-heading text-base font-bold text-white hover:text-brand-yellow transition"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-brand-yellow shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-brand-surface-border/50 bg-brand-surface/40 p-5 text-sm text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
