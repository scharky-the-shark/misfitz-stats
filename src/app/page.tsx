export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(124,255,0,0.10),transparent_35%)]" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Misfitz"
              className="h-10 w-auto drop-shadow-[0_0_15px_rgba(124,255,0,0.45)]"
            />

            <span className="text-lg font-black tracking-widest text-[#7CFF00]">
              MISFITZ
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <div className="group relative cursor-pointer">
              <span className="transition hover:text-[#7CFF00]">
                Game + Lore
              </span>

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

            <div className="group relative cursor-pointer">
              <span className="transition hover:text-[#00D9FF]">
                Tutorial
              </span>

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

            <div className="group relative cursor-pointer">
              <span className="transition hover:text-[#7CFF00]">
                Updates
              </span>

              <div className="absolute top-10 hidden min-w-[200px] rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl group-hover:block">
                <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                  Patch Notes
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer">
              <span className="transition hover:text-[#00D9FF]">
                Leaderboards
              </span>

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
        {/* Glow */}
        <div className="absolute h-[420px] w-[420px] rounded-full bg-[#7CFF00]/10 blur-3xl" />

        <img
          src="/logo.png"
          alt="Misfitz Logo"
          className="relative z-10 mb-8 w-full max-w-[520px] drop-shadow-[0_0_45px_rgba(124,255,0,0.45)]"
        />

        <div className="relative z-10 max-w-3xl">
          <h1 className="mb-6 text-5xl font-black uppercase tracking-wider md:text-7xl">
            The Ultimate
            <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
              MISFITZ Hub
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70 md:text-xl">
            Explore lore, discover relics, track statistics, dominate
            leaderboards and become one of the deadliest Misfitz players.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-[#7CFF00] px-8 py-4 text-lg font-bold text-black transition hover:scale-105 hover:shadow-[0_0_35px_rgba(124,255,0,0.55)]">
              Explore Game
            </button>

            <button className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition hover:border-[#00D9FF] hover:bg-[#00D9FF]/10">
              View Stats
            </button>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative mx-auto grid max-w-7xl gap-6 px-6 pb-24 md:grid-cols-2 xl:grid-cols-4">
        {[
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
        ].map((card) => (
          <div
            key={card.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-[#7CFF00]/40 hover:bg-white/10"
          >
            <div className="mb-4 h-2 w-16 rounded-full bg-gradient-to-r from-[#7CFF00] to-[#00D9FF]" />

            <h3 className="mb-3 text-2xl font-bold">{card.title}</h3>

            <p className="text-white/65">{card.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}