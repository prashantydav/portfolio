import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const heading = Sora({
  subsets: ["latin"],
  variable: "--font-heading"
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Prashant Yadav | AI/ML Engineer",
  description:
    "AI/ML engineer portfolio featuring production conversational AI, computer vision systems, and end-to-end MLOps delivery."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
