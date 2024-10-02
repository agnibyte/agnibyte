/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agni-byte.com",
        port: "",
        //pathname: "/public/images", // Matches all paths on agni-byte.com
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        //pathname: "/public/images", // Matches all paths on agni-byte.com
      },
    ],
  },
};

module.exports = nextConfig;
