/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
