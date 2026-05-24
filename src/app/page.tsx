// src/app/page.tsx

"use client";

import { useEffect } from "react";

const features = [
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
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Misfitz Logo"
              className="h-12 w-auto drop-shadow-[0_0_18px_rgba(124,255,0,0.45)]"
            />

            <div>
              <p className="text-xl font-black tracking-widest text-[#7CFF00]">
                MISFITZ
              </p>

              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Community Hub
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <div className="group relative">
              <button className="transition hover:text-[#7CFF00]">
                Game + Lore
              </button>

              <div className="absolute top-10 hidden min-w-[220px] rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl group-hover:block">
                <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                  Characters
                </a>

                <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                  Relics
                </a>

                <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                  Map
                </a>
              </div>
            </div>

            <div className="group relative">
              <button className="transition hover:text-[#00D9FF]">
                Tutorial
              </button>

              <div className="absolute top-10 hidden min-w-[240px] rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl group-hover:block">
                <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                  How to Install
                </a>

                <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                  Learn the Game
                </a>

                <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                  Become a Pro
                </a>
              </div>
            </div>

            <div className="group relative">
              <button className="transition hover:text-[#7CFF00]">
                Updates
              </button>

              <div className="absolute top-10 hidden min-w-[220px] rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl group-hover:block">
                <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                  Patch Notes
                </a>
              </div>
            </div>

            <div className="group relative">
              <button className="transition hover:text-[#00D9FF]">
                Leaderboards
              </button>

              <div className="absolute top-10 hidden min-w-[260px] rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl group-hover:block">
                <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                  Top Relic Collectors
                </a>

                <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                  Top Killers
                </a>

                <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                  Fastest Relic Finish
                </a>
              </div>
            </div>

            <a className="transition hover:text-[#7CFF00]">Stats</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="absolute h-[500px] w-[500px] rounded-full bg-[#7CFF00]/10 blur-3xl" />

        <img
          src="/logo.png"
          alt="Misfitz"
          className="relative z-10 mb-8 w-full max-w-[480px] drop-shadow-[0_0_45px_rgba(124,255,0,0.45)]"
        />

        <div className="relative z-10 max-w-5xl">
          <h1 className="mb-6 text-5xl font-black uppercase tracking-wider md:text-7xl">
            The Ultimate
            <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
              MISFITZ TRACKER
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/70 md:text-2xl">
            Explore lore, discover relics, track statistics, dominate
            leaderboards and become one of the deadliest Misfitz players.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-[#7CFF00] px-8 py-4 text-lg font-bold text-black transition hover:scale-105 hover:shadow-[0_0_35px_rgba(124,255,0,0.55)]">
              About Misfitz
            </button>

            <button className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition hover:border-[#00D9FF] hover:bg-[#00D9FF]/10">
              View Stats
            </button>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-2 xl:grid-cols-4">
        {features.map((card) => (
          <div
            key={card.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#7CFF00]/40 hover:bg-white/10"
          >
            <div className="mb-4 h-2 w-16 rounded-full bg-gradient-to-r from-[#7CFF00] to-[#00D9FF]" />

            <h3 className="mb-3 text-2xl font-bold">{card.title}</h3>

            <p className="text-white/65">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:text-left">
          <div>
            <p className="text-lg font-bold text-[#7CFF00]">
              MISFITZ STATS PAGE
            </p>

            <p className="mt-2 text-sm text-white/45">
              Platform for statistics, tutorials and
              leaderboards.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <a
              href="https://www.antiherostudios.com"
              target="_blank"
              className="transition hover:text-[#7CFF00]"
            >
              Official Studio
            </a>

            <a
              href="https://www.antiherostudios.com/en?creatorCode=SCHARKY"
              target="_blank"
              className="transition hover:text-[#7CFF00]"
            >
              Register for Playtests
            </a>

            <a className="transition hover:text-[#7CFF00]">
              Discord
            </a>

            <a className="transition hover:text-[#00D9FF]">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}