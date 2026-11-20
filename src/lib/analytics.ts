/* Google Analytics 4, switched on by NEXT_PUBLIC_GA_ID (a "G-…" measurement
   id set in Vercel). Without it no tag loads and trackEvent does nothing.

   Event names follow the Compass CRM's GA4 provisioning, which marks
   `phone_click` and `form_submit` as key events. */
export const GA_ID = /^G-[A-Z0-9]{4,20}$/.test(process.env.NEXT_PUBLIC_GA_ID ?? "")
  ? (process.env.NEXT_PUBLIC_GA_ID as string)
  : null;

type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;

export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (!GA_ID || typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
