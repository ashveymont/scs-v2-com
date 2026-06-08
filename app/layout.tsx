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
  title: "The Sovereign Chess Society",
  description: "A private members institution.",
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
