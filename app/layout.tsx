import "./globals.css";

export const metadata = {
  title: "GSM자동화세차기",
  description: "자동차 자동화 세차기 제조 · 판매 전문기업",
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
