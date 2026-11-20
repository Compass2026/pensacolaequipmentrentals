"use client";

import { useEffect } from "react";
import Script from "next/script";
import { GA_ID, trackEvent } from "@/lib/analytics";

/* Loads GA4 only when NEXT_PUBLIC_GA_ID is set, and reports every click on a
   tel: link (header, sticky bar, page CTAs, article CTAs) as `phone_click`.
   Quote submissions are reported by QuoteForm as `form_submit`. */
export function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (!link) return;
      trackEvent("phone_click", {
        phone_number: link.getAttribute("href")?.slice(4),
        link_text: link.textContent?.trim().slice(0, 100),
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
