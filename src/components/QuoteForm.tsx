"use client";

import { useState } from "react";
import { EQUIPMENT_CATALOG } from "@/data/equipment";
import { Send, CheckCircle2, PhoneCall } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

interface QuoteFormProps {
  preselectedEquipment?: string;
  onSuccess?: () => void;
}

export function QuoteForm({ preselectedEquipment, onSuccess }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    equipment: preselectedEquipment || EQUIPMENT_CATALOG[0].name,
    startDate: "",
    duration: "Daily",
    deliveryZipOrAddress: "",
    preferredContact: "Phone",
    projectDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted to GoHighLevel:", formData);
    setSubmitted(true);
    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 3000);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-red/40 bg-brand-charcoal p-8 text-center space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/20 text-brand-red">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white">
          Quote Request Received!
        </h3>
        <p className="text-gray-300 text-sm max-w-md mx-auto">
          Thank you, <span className="text-white font-bold">{formData.name}</span>. Our father-and-son team will review equipment availability for <span className="text-brand-red font-bold">{formData.equipment}</span> and contact you shortly.
        </p>
        <div className="pt-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-5 py-2.5 text-sm font-bold text-white shadow-lg"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Need Immediate Confirmation? Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
            Your Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="w-full rounded-xl border border-brand-surface-border bg-brand-black px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-brand-red focus:outline-none"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="850-555-0199"
            className="w-full rounded-xl border border-brand-surface-border bg-brand-black px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-brand-red focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full rounded-xl border border-brand-surface-border bg-brand-black px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-brand-red focus:outline-none"
          />
        </div>

        {/* Equipment Requested */}
        <div>
          <label htmlFor="equipment" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
            Requested Equipment *
          </label>
          <select
            id="equipment"
            value={formData.equipment}
            onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
            className="w-full rounded-xl border border-brand-surface-border bg-brand-black px-4 py-2.5 text-sm text-white focus:border-brand-red focus:outline-none"
          >
            {EQUIPMENT_CATALOG.map((item) => (
              <option key={item.id} value={item.name} className="bg-brand-charcoal text-white">
                {item.name}
              </option>
            ))}
            <option value="Land Clearing Service" className="bg-brand-charcoal text-white">
              Hire Us For Full Land Clearing Services
            </option>
            <option value="Multiple Equipment Package" className="bg-brand-charcoal text-white">
              Multiple Equipment Rental Package
            </option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Start Date */}
        <div>
          <label htmlFor="startDate" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            className="w-full rounded-xl border border-brand-surface-border bg-brand-black px-4 py-2.5 text-sm text-white focus:border-brand-red focus:outline-none"
          />
        </div>

        {/* Duration */}
        <div>
          <label htmlFor="duration" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
            Duration
          </label>
          <select
            id="duration"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            className="w-full rounded-xl border border-brand-surface-border bg-brand-black px-4 py-2.5 text-sm text-white focus:border-brand-red focus:outline-none"
          >
            <option value="Daily">Daily Rental</option>
            <option value="Weekly">Weekly Rental</option>
            <option value="Monthly">Monthly Rental</option>
            <option value="Undecided">Not Sure / Flexible</option>
          </select>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label htmlFor="preferredContact" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
            Preferred Contact
          </label>
          <select
            id="preferredContact"
            value={formData.preferredContact}
            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
            className="w-full rounded-xl border border-brand-surface-border bg-brand-black px-4 py-2.5 text-sm text-white focus:border-brand-red focus:outline-none"
          >
            <option value="Phone">Phone Call</option>
            <option value="SMS">Text Message (SMS)</option>
            <option value="Email">Email</option>
          </select>
        </div>
      </div>

      {/* Delivery Address or ZIP */}
      <div>
        <label htmlFor="deliveryAddress" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
          Delivery Address or ZIP Code *
        </label>
        <input
          type="text"
          id="deliveryAddress"
          required
          value={formData.deliveryZipOrAddress}
          onChange={(e) => setFormData({ ...formData, deliveryZipOrAddress: e.target.value })}
          placeholder="e.g. 7013 Chapel St, Pensacola FL 32504"
          className="w-full rounded-xl border border-brand-surface-border bg-brand-black px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-brand-red focus:outline-none"
        />
      </div>

      {/* Project Notes */}
      <div>
        <label htmlFor="projectDetails" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
          Project Details / Attachments Needed
        </label>
        <textarea
          id="projectDetails"
          rows={3}
          value={formData.projectDetails}
          onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
          placeholder="Describe your job site, work type, or attachment needs (e.g. grapple bucket, tooth bucket, brush clearing)..."
          className="w-full rounded-xl border border-brand-surface-border bg-brand-black px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-brand-red focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red py-3.5 text-base font-extrabold text-white transition hover:bg-brand-blue shadow-xl"
      >
        <Send className="h-4 w-4" />
        <span>Check Availability &amp; Send Quote Request</span>
      </button>

      <p className="text-center text-[11px] text-gray-400">
        By submitting, you agree to receive follow-up contact regarding your equipment request. We respect your privacy.
      </p>
    </form>
  );
}
