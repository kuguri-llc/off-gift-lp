import type { NextConfig } from "next";

// GitHub Pages のサブパス（https://kuguri-llc.github.io/off-gift-lp/）配信用。
// 独自ドメインやルート配信に移す場合は basePath を "" にする。
const basePath = "/off-gift-lp";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
