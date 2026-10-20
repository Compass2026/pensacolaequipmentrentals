import type { Metadata } from "next";
import { Geologica, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { generateLocalBusinessSchema } from "@/lib/jsonld";

const geologica = Geologica({
  subsets: ["latin"],
  variable: "--font-geologica",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bnbcoastalcuts.com"),
  title: {
    default: "Pensacola Equipment Rentals | Mini Excavators, Skid Steers & Trailers",
    template: "%s | Pensacola Equipment Rentals",
  },
  description: "Locally owned father-and-son equipment rentals & land clearing in Pensacola, FL. Rent Bobcat excavators, skid steers, dump trailers & mowers with jobsite delivery.",
  keywords: [
    "equipment rental Pensacola FL",
    "mini excavator rental Pensacola",
    "skid steer rental Pensacola FL",
    "dump trailer rental Pensacola",
    "land clearing Pensacola FL",
    "Bobcat rental Pensacola",
    "Kubota rental Pensacola",
  ],
  authors: [{ name: "Pensacola Equipment Rentals" }],
  creator: "Pensacola Equipment Rentals",
  publisher: "Pensacola Equipment Rentals",
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.bnbcoastalcuts.com",
    siteName: "Pensacola Equipment Rentals",
    title: "Dependable Equipment Rentals Delivered Across Pensacola",
    description: "Rent reliable excavators, skid steers, trailers, mowers & tools with convenient delivery from a local father-and-son team.",
    images: [
      {
        url: "https://www.bnbcoastalcuts.com/wp-content/uploads/2025/07/Untitled-500-x-500-px.png",
        width: 500,
        height: 500,
        alt: "Pensacola Equipment Rentals Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pensacola Equipment Rentals",
    description: "Dependable equipment rentals and land clearing delivered in Pensacola, FL.",
    images: ["https://www.bnbcoastalcuts.com/wp-content/uploads/2025/07/Untitled-500-x-500-px.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateLocalBusinessSchema();

  return (
    <html lang="en" className={`${geologica.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col bg-white text-brand-charcoal antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
