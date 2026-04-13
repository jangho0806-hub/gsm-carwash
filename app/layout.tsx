import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: "터널세차기 · 문형세차기 · 노터치세차기 | 세차장 창업 · A/S 전문 GSM",

  description:
    "터널세차기, 문형세차기, 노터치세차기 설치 및 세차장 창업 전문. 코인세차장 구축, 세차기 A/S 및 유지보수 전국 대응.",

  keywords: [
    "터널세차기",
    "문형세차기",
    "노터치세차기",
    "세차장 창업",
    "코인세차장 설치",
    "세차기 A/S",
    "세차기 수리",
    "세차기 유지보수",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "세차기 설치 및 A/S 전문 GSM",
    description: "터널세차기, 문형세차기, 노터치세차기 구축 및 유지보수",
    url: "https://your-domain.com",
    siteName: "GSM",
    locale: "ko_KR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
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
