import { Search, CalendarCheck, Truck, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Choose Your Equipment",
      description: "Browse our lineup of mini excavators, skid steers, dump trailers, mowers, and tools.",
    },
    {
      number: "02",
      icon: CalendarCheck,
      title: "Request Availability",
      description: "Submit a quick online availability request or call 850-407-6566 to reserve your dates.",
    },
    {
      number: "03",
      icon: Truck,
      title: "Schedule Delivery",
      description: "We deliver the machine directly to your residential property or commercial job site.",
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Complete Your Project",
      description: "Knock out your earthmoving or land clearing project. We pick up the machine when done.",
    },
  ];

  return (
    <section className="bg-brand-black py-20 border-b border-brand-surface-border">
      <div className="container space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
            Straightforward Process
          </span>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            How Renting Equipment Works
          </h2>
          <p className="text-sm text-gray-400">
            From selecting the right machine to delivering it straight to your location, we make equipment rentals quick, easy, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between rounded-2xl border border-brand-surface-border bg-brand-charcoal p-6 space-y-4 hover:border-brand-yellow/50 transition group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 group-hover:bg-brand-yellow group-hover:text-brand-black transition">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-heading text-2xl font-extrabold text-brand-surface-border group-hover:text-brand-yellow transition">
                    {step.number}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
