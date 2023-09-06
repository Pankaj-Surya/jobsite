/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pexels.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pexels.com',
        port: '',
        pathname: '/photo/**',
      },
    ],
  },
}

module.exports = nextConfig
