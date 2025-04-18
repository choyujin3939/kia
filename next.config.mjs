/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  compiler: {
    emotion: true,
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error"],
          }
        : false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      oneOf: [
        {
          resourceQuery: /url/,
          type: 'asset/resource',
        },
        {
          use: ['@svgr/webpack'],
        },
      ],
    });
    return config;
  },
  redirects: async () => {
    return [
      {
        source: "/:path((?!warning.html$).*)",
        has: [
          {
            type: "header",
            key: "user-agent",
            value: "(.*Trident.*)",
          },
        ],
        permanent: false,
        destination: "/warning.html",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
