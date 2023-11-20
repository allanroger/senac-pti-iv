/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["source.unsplash.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.stripe.com',
        port: '',
        pathname: '/links/**',
      },
    ],
  },
}

module.exports = nextConfig
