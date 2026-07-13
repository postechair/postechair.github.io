import type { Metadata } from "next";
import "@/styles/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "POSTECH AI 시리즈 | AIR센터",
  description:
    "포스텍 구성원의 AI 전환(AX)을 돕는 교육·실습·챌린지 프로그램 — POSTECH AIR센터.",
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
