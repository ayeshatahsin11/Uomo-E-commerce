/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1102",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
