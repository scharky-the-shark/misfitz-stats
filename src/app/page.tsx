// src/app/page.tsx

"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const features = [
  {
    title: "Game Version",
    desc: "Explore different game versions, not just text but also clips and shots.",
  },
  {
    title: "Lore & World",
    desc: "Discover characters, hidden relic stories and the dark world of Misfitz.",
  },
  {
    title: "Tutorials",
    desc: "Learn mechanics, strategies and advanced gameplay techniques.",
  },
  {
    title: "Leaderboards",
    desc: "Track top killers, relic collectors and fastest players worldwide.",
  },
  {
    title: "Live Statistics",
    desc: "Real-time stats, match tracking and future API integrations.",
  },
];

export default function Home() {
  useEffect(() => {
    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white select-none">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.12),transparent_35%)]" />

      <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-[#7CFF00]/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#00D9FF]/10 blur-3xl" />

      {/* Navbar */}
      <Header />

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[58vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="absolute h-[420px] w-[420px] rounded-full bg-[#7CFF00]/10 blur-3xl" />

        <img
          src="/logo.png"
          alt="Misfitz"
          className="relative z-10 mb-3 w-full max-w-[520px] drop-shadow-[0_0_35px_rgba(124,255,0,0.45)]"
        />

        <div className="relative z-10 max-w-5xl">
          <h1 className="mb-4 text-4xl font-black uppercase tracking-wider md:text-6xl">
            The Ultimate
            <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
              MISFITZ TRACKER
            </span>
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-sm text-white/70 md:text-lg">
            Explore lore, discover relics, track statistics, dominate
            leaderboards and become one of the deadliest Misfitz players.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="rounded-2xl bg-[#7CFF00] px-6 py-3 text-base font-bold text-black transition hover:scale-105 hover:shadow-[0_0_35px_rgba(124,255,0,0.55)]">
              About Misfitz
            </button>

            <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold backdrop-blur-xl transition hover:border-[#00D9FF] hover:bg-[#00D9FF]/10">
              View Stats
            </button>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative mx-auto grid max-w-7xl gap-4 px-6 pb-12 md:grid-cols-2 xl:grid-cols-5">
        {features.map((card) => (
          <div
            key={card.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#7CFF00]/40 hover:bg-white/10"
          >
            <div className="mb-3 h-2 w-14 rounded-full bg-gradient-to-r from-[#7CFF00] to-[#00D9FF]" />

            <h3 className="mb-2 text-xl font-bold">{card.title}</h3>

            <p className="text-[15px] text-white/65 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}