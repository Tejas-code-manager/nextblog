/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    path: '/public/',
  },
  env: {
    API_URL: "http://localhost:4001/",
  },
}

module.exports = nextConfig
