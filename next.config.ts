import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pagesでサブディレクトリにデプロイする場合はbasePathを設定
  // basePath: "/portfolio",
  trailingSlash: true,
};

export default nextConfig;
