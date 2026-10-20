import { Search, CalendarCheck, Truck, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const STEPS = [
  {
    icon: Search,
    title: "Choose your machine",
    description: "Browse mini excavators, skid steers, dump trailers, mowers and tools.",
  },
  {
    icon: CalendarCheck,
    title: "Request availability",
    description: `Send a quick request online or call ${BUSINESS_INFO.phone} to lock in your dates.`,
  },
  {
    icon: Truck,
    title: "We deliver it",
    description: "We drop the machine at your home or jobsite — fueled, inspected and ready.",
  },
  {
    icon: CheckCircle2,
    title: "Get it done",
    description: "Knock out your project. When you're finished, we come back and pick it up.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="container space-y-16">
        <SectionHeading
          align="center"
          eyebrow="Simple process"
          title="Rented, delivered, done."
          description="From picking the right machine to dropping it at your gate, renting with us is quick, easy and stress-free."
        />

        <div className="relative">
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px border-t-2 border-dashed border-gray-200 lg:block" />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Reveal as="li" key={step.title} delay={idx * 120} className="group relative text-center">
                  <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gray-200 bg-white shadow-card transition duration-500 group-hover:-translate-y-1 group-hover:border-brand-red group-hover:shadow-glow-red">
                    <Icon className="h-7 w-7 text-brand-blue transition group-hover:text-brand-red" />
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-black font-heading text-xs font-bold text-white">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold text-brand-black">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-gray-500">{step.description}</p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
