"use client";

import { useState } from "react";
import { Plus, PhoneCall } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { Reveal } from "./ui/Reveal";

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
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="space-y-6 lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
            <span className="eyebrow">Got questions?</span>
            <h2 className="display text-4xl text-brand-black sm:text-5xl">{title}</h2>
            <p className="max-w-md text-base leading-relaxed text-gray-600">{subtitle}</p>
            <div className="relative max-w-md overflow-hidden rounded-3xl bg-hero p-7 text-white">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sun opacity-30 blur-xl" />
              <p className="relative font-heading text-lg font-bold">Still not sure which machine you need?</p>
              <p className="relative mt-1 text-sm text-white/60">Call or text — we&apos;ll help you pick the right equipment for the job.</p>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-primary relative mt-5 !px-5 !py-3">
                <PhoneCall className="h-4 w-4" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </Reveal>

          <div className="space-y-3 lg:col-span-7">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <Reveal key={faq.question} delay={Math.min(idx, 6) * 60}>
                  <div
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      isOpen ? "border-brand-blue/30 shadow-lift" : "border-gray-200 shadow-card hover:border-gray-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="flex w-full items-center justify-between gap-6 p-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className={`font-heading text-base font-bold sm:text-lg ${isOpen ? "text-brand-blue" : "text-brand-black"}`}>
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen ? "rotate-45 bg-brand-red text-white" : "bg-gray-100 text-brand-black"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm leading-relaxed text-gray-600 sm:text-[15px]">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
