import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { UmamiAnalytics } from "../components/analytics/umami";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// app/layout.tsx
export const metadata = {
  title: {
    template: "%s | mathia.nl",
    default: "Social media manager | Mathia.nl",
  },
  description:
    "Social media manager voor MKB. Strategie sessies digitaal of op locatie, social media beheer van A tot Z. Maak gratis een afspraak!",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <UmamiAnalytics />
      </body>
    </html>
  );
}
