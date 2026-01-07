/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thelifeco.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
}

export default nextConfig
