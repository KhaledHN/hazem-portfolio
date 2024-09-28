import analyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    optimizePackageImports: ["icon-library"],
  },
  images: {
    unoptimized: true,
  }
};

// Support for Cloudflare Images Resizing
if (process.env.CF_PAGES) {
  nextConfig.images = {
    loader: 'custom',
    loaderFile: './utils/cloudflare-image-loader.ts',
  }
}

const withBundleAnalyzer = analyzer({
  enabled: process?.env?.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
