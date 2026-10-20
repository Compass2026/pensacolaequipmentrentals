import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <Reveal className={`${centered ? "mx-auto text-center" : ""} max-w-3xl space-y-5 ${className}`}>
      <span className={`${dark ? "eyebrow-light" : "eyebrow"} ${centered ? "justify-center" : ""}`}>{eyebrow}</span>
      <h2
        className={`display text-4xl sm:text-5xl lg:text-[3.5rem] ${dark ? "text-white" : "text-brand-black"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed sm:text-lg ${dark ? "text-white/65" : "text-gray-600"} ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
