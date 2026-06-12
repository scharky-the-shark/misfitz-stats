import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DeviceGuard from "../components/DeviceGuard";

export const metadata: Metadata = {
  title: "Misfitz Stats",
  description: "Community statistics for Misfitz"
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