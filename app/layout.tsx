import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sovereignchesssociety.com"),
  title: {
    default: "Sovereign Chess Society — Private Members Institution, Dubai",
    template: "%s — Sovereign Chess Society",
  },
  description: "The Sovereign Chess Society is a private members institution for intellectually serious operators in Dubai. Founders, investors, and executives united by chess.",
  keywords: [
    "sovereign chess society",
    "chess society dubai",
    "private chess club dubai",
    "private members club dubai",
    "private members institution dubai",
    "dubai private societies",
    "chess for founders investors",
    "intellectual private club dubai",
    "uhnw private club dubai",
  ],
  alternates: {
    canonical: "https://www.sovereignchesssociety.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sovereignchesssociety.com",
    siteName: "Sovereign Chess Society",
    title: "Sovereign Chess Society — Private Members Institution, Dubai",
    description: "The Sovereign Chess Society is a private members institution for intellectually serious operators in Dubai. Founders, investors, and executives united by chess.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sovereign Chess Society — Private Members Institution, Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Chess Society — Private Members Institution, Dubai",
    description: "The Sovereign Chess Society is a private members institution for intellectually serious operators in Dubai. Founders, investors, and executives united by chess.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    shortcut: '/favicon.ico',
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sovereign Chess Society",
  url: "https://www.sovereignchesssociety.com",
  logo: "https://www.sovereignchesssociety.com/images/og-image.png",
  description:
    "A private members institution for intellectually serious operators in Dubai who play chess.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "Ashan Veymont",
  },
  sameAs: ["https://www.sovereignchesssociety.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ paddingTop: "62px" }}>
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
        <GoogleAnalytics gaId="G-6HDBWGW6E9" />
      </body>
    </html>
  );
}
