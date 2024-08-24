import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Rate My Workplace",
  description: "A Next Js app",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Rate My Workplace</title>
        <meta name="Rate My Workplace" content="Rate My Workplace"></meta>
        <link rel="icon" href="/logo.png" sizes="16x16" />
        <link rel="icon" href="/logo.png" sizes="32x32" />
        <link rel="icon" href="/logo.png" sizes="48x48" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
