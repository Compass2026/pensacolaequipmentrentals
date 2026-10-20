import { Truck, Users, Clock, Wrench } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const TRUST_POINTS = [
  {
    icon: Users,
    title: "Locally owned & operated",
    description: "A father-and-son team serving Pensacola with personal service and local accountability.",
  },
  {
    icon: Truck,
    title: "Jobsite delivery",
    description: "Drop-off & pickup within 20 miles of Pensacola and the surrounding Panhandle.",
  },
  {
    icon: Wrench,
    title: "Contractor & DIY ready",
    description: "Well-maintained machines ready for heavy construction or weekend landscaping.",
  },
  {
    icon: Clock,
    title: "Flexible durations",
    description: "Daily, weekly and monthly rates tailored to your project schedule.",
  },
];

export function TrustBar() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {TRUST_POINTS.map((point, idx) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={idx * 80} className="group flex gap-4 py-8 sm:px-6 lg:py-10 first:lg:pl-0 last:lg:pr-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/[0.07] text-brand-blue transition duration-300 group-hover:bg-brand-red group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-base font-bold text-brand-black">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{point.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
