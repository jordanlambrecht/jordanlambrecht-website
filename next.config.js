/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible")

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
  customDomain: "https://analytics.jordy.world", // Point to your self-hosted Plausible instance
})(nextConfig)
