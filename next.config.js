/** @type {import('next').NextConfig} */
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
    ];
  },
};

module.exports = nextConfig;
