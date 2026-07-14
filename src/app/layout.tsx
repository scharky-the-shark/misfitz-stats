import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DeviceGuard from "../components/DeviceGuard";

export const metadata: Metadata = {
  metadataBase: new URL("https://misfitz-stats.pages.dev"),

  title: "Misfitz Statz",
  description:
    "Track your Misfitz progress, compare players, explore leaderboards and view detailed statistics.",

  openGraph: {
    title: "Misfitz Statz",
    description:
      "Track your Misfitz progress, compare players, explore leaderboards and view detailed statistics.",
    url: "https://misfitz-stats.pages.dev",
    siteName: "Misfitz Stats",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Misfitz Statz",
    description:
      "Track your Misfitz progress, compare players and climb the leaderboards.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0B0F19] text-white">
      <DeviceGuard />
        <div className="flex min-h-screen flex-col">

          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

        </div>

      </body>
    </html>
  );
}