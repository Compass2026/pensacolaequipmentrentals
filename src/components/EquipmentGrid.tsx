"use client";

import { useMemo, useState } from "react";
import { EQUIPMENT_CATALOG } from "@/data/equipment";
import { EquipmentCard } from "./EquipmentCard";

export function EquipmentGrid() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(EQUIPMENT_CATALOG.map((item) => item.category)))], []);
  const [active, setActive] = useState("All");
  const items = active === "All" ? EQUIPMENT_CATALOG : EQUIPMENT_CATALOG.filter((item) => item.category === active);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 border-b border-gray-200 pb-6 md:flex-row md:items-center md:justify-between">
        <div className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:px-0" role="tablist" aria-label="Filter equipment by category">
          {categories.map((cat) => {
            const count = cat === "All" ? EQUIPMENT_CATALOG.length : EQUIPMENT_CATALOG.filter((i) => i.category === cat).length;
            const selected = active === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(cat)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  selected
                    ? "border-brand-black bg-brand-black text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:text-brand-black"
                }`}
              >
                {cat}
                <span className={`rounded-full px-1.5 text-[11px] ${selected ? "bg-white/15" : "bg-gray-100"}`}>{count}</span>
              </button>
            );
          })}
        </div>
        <p className="text-sm text-gray-500">Delivery &amp; pickup included within 20 miles of Pensacola</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <EquipmentCard key={item.id} equipment={item} />
        ))}
      </div>
    </div>
  );
}
