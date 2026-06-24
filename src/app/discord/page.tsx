"use client";

import Link from "next/link";

const resources = [
  {
    title: "Commands",
    desc: "View all available Discord commands.",
    href: "/discord/commands",
  },
  {
    title: "Privacy Policy",
    desc: "Learn how your data is handled.",
    href: "/privacy",
  },
  {
    title: "Terms of Service",
    desc: "Read the Discord Bot terms.",
    href: "/terms",
  },
  {
    title: "Update Log",
    desc: "New features and changes.",
    href: "/version/discord",
  },
  {
    title: "Compare",
    desc: "Compare the bot with the website.",
    href: "/discord/compare",
  },
];

export default function DiscordPage() {
  return (
    <main className="relative min-h-fit overflow-hidden bg-[#0b1220] text-white select-none">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.12),transparent_35%)]" />

      <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-[#7CFF00]/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#00D9FF]/10 blur-3xl" />

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="absolute h-[420px] w-[420px] rounded-full bg-[#7CFF00]/10 blur-3xl" />

        <div className="relative z-10 max-w-5xl">

          <h1 className="mb-4 text-4xl font-black uppercase tracking-wider md:text-7xl">
            The Ultimate
            <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
              MISFITZ DISCORD BOT
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-sm text-white/70 md:text-lg">
            Explore the full power of Misfitz Statz directly inside Discord.
            Access player statistics, leaderboards, collections, tracking and
            account management with a single command.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/discord/install"
              className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold backdrop-blur-xl transition hover:border-[#7CFF00] hover:bg-[#7CFF00]/10"
            >
              Add to Discord Server
            </Link>

            <Link
              href="/discord/install"
              className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold backdrop-blur-xl transition hover:border-[#00D9FF] hover:bg-[#00D9FF]/10"
            >
              User Install
            </Link>
          </div>
        <div className="mx-auto mt-4 mb-2 max-w-3xl rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-5 backdrop-blur-xl">

          <h2 className="text-lg font-bold text-yellow-300">
            The Bot will be available for everyone on 15th July 2026
          </h2>
        </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="relative mx-auto grid max-w-7xl gap-4  pb-12 md:grid-cols-2 xl:grid-cols-5">
        {resources.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#7CFF00]/40 hover:bg-white/10"
          >
            <h3 className="mb-2 text-xl font-bold">{card.title}</h3>

            <p className="text-[15px] leading-relaxed text-white/65">
              {card.desc}
            </p>
          </Link>
        ))}
      </section>

      {/* Support Server */}
      <section className="relative mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 p-8 text-center backdrop-blur-xl">
          <div className="mb-2 text-3xl"></div>

          <h2 className="mb-3 text-2xl font-bold">
            Supporter from 1st Hour
          </h2>

          <p className="mx-auto mb-6 max-w-2xl text-white/70">
            Join the Crash Test / Support Server before 31st July 2026 and
            unlock an exclusive achievement on your profile.
          </p>

          <Link
            href="https://discord.gg/74suQKzBkp"
            className="inline-flex rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold backdrop-blur-xl transition hover:border-[#7CFF00] hover:bg-[#7CFF00]/10"
          >
            Join Support Server
          </Link>
        </div>
      </section>
    </main>
  );
}
