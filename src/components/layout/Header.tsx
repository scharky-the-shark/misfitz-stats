"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between px-6 py-5 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Misfitz Logo"
            className="h-12 w-auto drop-shadow-[0_0_18px_rgba(124,255,0,0.45)]"
          />

          <div>
            <p className="text-xl font-black tracking-widest text-[#7CFF00]">
              STATS TRACKER
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

            <div className="absolute top-full pt-3 hidden min-w-[220px] rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl group-hover:block">
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

            <div className="absolute top-full pt-3 hidden min-w-[240px] rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl group-hover:block">
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
            <button className="transition hover:text-[#00D9FF]">
              Leaderboards
            </button>

            <div className="absolute top-full pt-3 hidden min-w-[260px] rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl group-hover:block">
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

          <a
            href="/version"
            className="transition hover:text-[#7CFF00]"
          >
            Version
          </a>

          <a
            href="/stats"
            className="transition hover:text-[#7CFF00]"
          >
            Stats
          </a>
        </nav>
      </div>
    </header>
  );
}