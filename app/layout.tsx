import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
// @ts-ignore: CSS module import type declarations may be missing in this environment
import "./globals.css";

// Load luxury fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair-display" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "Ahlia Fashion | Premium Unstitched Collections",
  description: "Premium Bangladeshi Women's Fashion specializing in high-quality 100% cotton unstitched three-piece collections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}