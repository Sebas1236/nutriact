/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com',
      "lh3.googleusercontent.com",
      "d205bpvrqc9yn1.cloudfront.net",
    ],
  }
}

module.exports = nextConfig
