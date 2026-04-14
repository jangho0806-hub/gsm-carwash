import "./globals.css";

export const metadata = {
  title: "GSM자동화세차기",
  description: "터널세차기,문형세차기(소형대형),노터치세차기,코인셀프세차장 제조시공업체",
verification: {
    other: {
      "naver-site-verification": "add1cd5cd597ce68e8c1ead9faf98899593045b5",
    },
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
