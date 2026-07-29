import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pensacola Equipment Rentals",
    short_name: "Pensacola Equipment",
    description: "Locally owned father-and-son equipment rentals & land clearing in Pensacola, FL.",
    start_url: "/",
    display: "standalone",
    background_color: "#1A1918",
    theme_color: "#F5B93F",
    icons: [
      {
        src: "https://www.bnbcoastalcuts.com/wp-content/uploads/2025/05/cropped-Untitled-design-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
