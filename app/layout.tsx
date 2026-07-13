import type { Metadata } from "next";
import "@/styles/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "POSTECH AIR | Center for AI & Institutional Research",
  description:
    "POSTECH AIR센터 — AI-Native University 전략과 구성원의 AI 전환(AX)을 돕는 교육·실습·챌린지 프로그램, AI 플랫폼.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
