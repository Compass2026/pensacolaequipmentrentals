"use client";

import { useId } from "react";
import Script from "next/script";
import { BUSINESS_INFO } from "@/data/business";

/* The GoHighLevel "Website" form, embedded exactly as GoHighLevel's embed
   code does it (the same form the WordPress site used). form_embed.js sizes
   the iframe to the form, including iframes mounted later in the quote
   pop-up; next/script loads it once per page however many forms render. */
export function GhlQuoteForm() {
  const id = BUSINESS_INFO.ghlFormId;
  // form_embed.js tracks iframes by element id, so each embed on a page (an
  // inline form plus the header's quote pop-up) needs its own.
  const iframeId = `inline-${id}-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${id}`}
        style={{ width: "100%", height: 640, border: "none", borderRadius: 3 }}
        id={iframeId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website"
        data-height="640"
        data-layout-iframe-id={iframeId}
        data-form-id={id}
        title="Request a quote"
      />
      <Script id="ghl-form-embed" src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
