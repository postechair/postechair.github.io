/** @type {import('next').NextConfig} */
// 루트 사이트 (postechair.github.io) — basePath 없음.
// ⚠️ 코드 기본값으로 "" 고정 (env 의존 금지 — 설계문서 rev.2 이슈 1)
const nextConfig = {
  output: "export",
  basePath: "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
