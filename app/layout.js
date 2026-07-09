import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "BitLinks",
    template: "%s | BitLinks",
  },

  description:
    "BitLinks is a fast and secure URL shortener that helps you create and manage short links easily.",

  keywords: [
    "URL Shortener",
    "BitLinks",
    "Next.js",
    "MongoDB",
    "Short URL",
    "Link Management",
  ],

  authors: [
    {
      name: "Aleena",
    },
  ],

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          min-h-screen
          bg-purple-50
          text-gray-900
          flex
          flex-col
        `}
      >
        <Navbar />

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
