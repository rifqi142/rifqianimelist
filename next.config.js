/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
    ],
  },
};

module.exports = nextConfig;
