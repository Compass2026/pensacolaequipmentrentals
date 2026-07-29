import { ShieldCheck, Truck, Users, Clock, Wrench } from "lucide-react";

export function TrustBar() {
  const trustPoints = [
    {
      icon: Users,
      title: "Locally Owned & Operated",
      description: "Father-and-son team serving Pensacola with personal service and local accountability.",
    },
    {
      icon: Truck,
      title: "Jobsite Delivery Available",
      description: "Prompt equipment drop-off & pickup within 20 miles of Pensacola and surrounding Panhandle.",
    },
    {
      icon: Wrench,
      title: "Contractor & DIY Friendly",
      description: "Well-maintained machines ready for heavy construction or home landscaping projects.",
    },
    {
      icon: Clock,
      title: "Flexible Rental Durations",
      description: "Convenient daily, weekly, and monthly rates tailored to your project schedule.",
    },
  ];

  return (
    <section className="border-y border-gray-200 bg-slate-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="flex space-x-4 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#185BA6]/10 text-[#185BA6] shadow-sm">
                  <Icon className="h-6 w-6 text-[#D74E31]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading text-base font-extrabold text-gray-900">
                    {point.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {point.description}
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
