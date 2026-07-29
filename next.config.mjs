/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bnbcoastalcuts.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/renting-a-skid-steer-heres-what-you-can-do-with-it",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/how-to-speed-up-jobsite-efficiency-with-the-right-rentals",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/diy-landscaping-projects-made-easy-with-the-right-rental-equipment",
        destination: "/resources",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
