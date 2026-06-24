import type { Metadata } from "next";
// @ts-ignore: CSS module import type declarations may be missing in this environment
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}