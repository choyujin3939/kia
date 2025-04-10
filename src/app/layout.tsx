import "./globals.css";
import { kiaFont } from "@/styles/font";

export const metadata = {
  title: "기아 비즈(Kia Biz) - 친환경 모빌리티 서비스",
  description: "기아 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.",
  robots: 'index, follow',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kiaFont.variable}>
      <body className={kiaFont.className}>
        {children}
      </body>
    </html>
  );
}
