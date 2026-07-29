import Image from "next/image";
import { CheckCircle2, UserCheck, Wrench, ShieldCheck, MapPin, PhoneCall } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export function WhyChooseUs() {
  const points = [
    {
      title: "Father & Son Business Values",
      description: "When you call, you speak directly with the owners. We treat your job site with care and personal commitment.",
    },
    {
      title: "Well-Maintained Modern Machines",
      description: "Our fleet consists of modern 2022–2023 Bobcat, Kubota, Iron Bull, and Gravely equipment serviced regularly for high uptime.",
    },
    {
      title: "Prompt Jobsite Delivery",
      description: "We haul equipment directly to your residential property or job site within 20 miles of Pensacola and surrounding Panhandle towns.",
    },
    {
      title: "Equipment or Full Service Options",
      description: "Rent the equipment to do it yourself, or hire our experienced crew to perform full land clearing and brush removal for you.",
    },
  ];

  return (
    <section className="bg-brand-charcoal py-20 border-b border-brand-surface-border">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left Column: Image Card */}
          <div className="relative rounded-2xl border border-brand-surface-border bg-brand-black p-3 overflow-hidden group shadow-2xl">
            <div className="relative h-[400px] sm:h-[480px] w-full rounded-xl overflow-hidden">
              <Image
                src="https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/pensacola1.jpg"
                alt="Pensacola Equipment Rentals heavy machinery on jobsite"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
            </div>

            {/* Overlaid Badge */}
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-brand-yellow/30 bg-brand-charcoal/90 p-4 backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-yellow text-brand-black font-bold">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">
                    Locally Owned & Operated in Pensacola
                  </h4>
                  <p className="text-xs text-brand-yellow font-medium">
                    Dependable Equipment. Honest Rates. On-Time Delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Point List */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
                Why Pensacola Equipment Rentals
              </span>
              <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
                Built For Local Contractors & DIY Homeowners
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Whether you’re clearing a backyard lot in Gulf Breeze, trenching utilities in Milton, or hauling roof tear-off debris in Pensacola, our father-and-son team provides the reliable machinery and friendly support you need.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {points.map((pt) => (
                <div key={pt.title} className="flex space-x-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <h4 className="font-heading text-base font-bold text-white">
                      {pt.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 rounded-lg bg-brand-yellow px-6 py-3 text-sm font-bold text-brand-black transition hover:bg-brand-yellow-dark shadow"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call Owner Directly: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
