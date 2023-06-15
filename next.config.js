/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // swcPlugins: [["next-superjson-plugin", {}]],
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "d205bpvrqc9yn1.cloudfront.net",
      "edbv2-ff7foj6vca-uc.a.run.app",
      "127.0.0.1",
    ],
  },
};

module.exports = nextConfig;
