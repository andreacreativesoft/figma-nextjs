import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import BackToTop from "@/components/BackToTop";
import TrackingScripts from "@/components/TrackingScripts";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AZ Pro Services - Chauffage, Plomberie & Débouchage à Bruxelles",
  description:
    "Vos experts en chauffage, plomberie et débouchage à Bruxelles, Brabant Wallon et Brabant Flamand. Dépannage urgent 24h/24, entretien chaudière, réparation fuite. Devis gratuit. Appelez le 0465877248.",
  keywords: [
    "chauffage Bruxelles",
    "plombier Bruxelles",
    "débouchage Bruxelles",
    "dépannage plomberie",
    "entretien chaudière",
    "plombier Anderlecht",
    "chauffagiste Brabant Wallon",
    "débouchage canalisation",
    "réparation fuite",
    "AZ Pro Services",
  ],
  authors: [{ name: "AZ Pro Services" }],
  creator: "AZ Pro Services",
  publisher: "AZ Pro Services",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://azproservices.be"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AZ Pro Services - Chauffage, Plomberie & Débouchage",
    description:
      "Vos experts en chauffage, plomberie et débouchage à Bruxelles. Service rapide, fiable et abordable. +1000 clients satisfaits.",
    url: "https://azproservices.be",
    siteName: "AZ Pro Services",
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AZ Pro Services - Chauffage, Plomberie & Débouchage",
    description:
      "Vos experts en chauffage, plomberie et débouchage à Bruxelles. Appelez le 0465877248.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <TrackingScripts />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
