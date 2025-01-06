/** @type {import('next').NextConfig} */
import { withPlausibleProxy } from "next-plausible"

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/filament-library",
        destination:
          "https://jordanlambrecht.notion.site/Filaments-f9903bf00c8b47e686cafb96b465340b",
        permanent: true,
      },
      {
        source: "/print-requests",
        destination: "/print-orders",
        permanent: true,
      },
    ]
  },
}

module.exports = withPlausibleProxy({
  customDomain: "https://analytics.jordy.world",
})(nextConfig)
