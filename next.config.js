/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    path: '/public/',
  },
  env: {
    API_URL: "http://localhost:4003/",
  },
}

module.exports = nextConfig
