import type { Metadata, Viewport } from "next";
import { Rufina, Gabriela, Inter } from "next/font/google";
import "./globals.css";

const rufina = Rufina({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rufina",
  display: "swap",
});

const gabriela = Gabriela({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gabriela",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFF5EC",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://nexty-website.vercel.app"
  ),
  title: "Nexty — Meaningful Connections & Tailored Experiences",
  description:
    "Nexty is your warm, personal companion designed to connect you with enriching local walks, culture, coffee, and wonderful companions.",
  icons: {
    icon: "/assets/fox-mark.png",
  },
  openGraph: {
    title: "Nexty — Meaningful Connections & Tailored Experiences",
    description:
      "A personal AI companion connecting active individuals with local activities, walks, and meaningful social moments.",
    images: ["/assets/logo-stacked.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rufina.variable} ${gabriela.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen bg-cream text-deep-brown selection:bg-burnt-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
