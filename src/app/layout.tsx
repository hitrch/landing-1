import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "РеноДім — ремонт квартир під ключ у Києві",
  description:
    "Ремонт квартир під ключ у Києві та області: фіксована ціна в договорі, власна бригада, гарантія 3 роки та щотижневі фотозвіти.",
  openGraph: {
    title: "РеноДім — ремонт квартир під ключ у Києві",
    description:
      "Фіксована ціна, власна бригада та гарантія 3 роки на ремонт квартир у Києві та області.",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uk"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
