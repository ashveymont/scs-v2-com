import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
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
    default: "Sovereign Chess Society",
    template: "%s — Sovereign Chess Society",
  },
  description: "A private members institution for intellectually serious operators who play chess. Founded in Dubai.",
  keywords: ["private members club", "chess", "dubai", "operators", "founders", "investors"],
  alternates: {
    canonical: "https://www.sovereignchesssociety.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sovereignchesssociety.com",
    siteName: "Sovereign Chess Society",
    title: "Sovereign Chess Society",
    description: "A private members institution for intellectually serious operators who play chess. Founded in Dubai.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sovereign Chess Society",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Chess Society",
    description: "A private members institution for intellectually serious operators who play chess. Founded in Dubai.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <body className="min-h-full flex flex-col" style={{ paddingTop: "62px" }}>
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
