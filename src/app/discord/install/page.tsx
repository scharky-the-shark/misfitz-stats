import Link from "next/link";
import Image from "next/image";

export default function DiscordInstallPage() {
  return (
    <main
  className="
    fixed
    inset-0
    z-[9999]
    overflow-hidden
    bg-[#020617]
    text-white
  "
>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-200px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute right-[-200px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-lime-500/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[140px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-24 pt-20 text-center">
        {/* Bot Icon */}
        <div className="relative mb-12">
          <div className="absolute inset-0 scale-150 rounded-full bg-cyan-400/30 blur-[100px]" />

          <div className="absolute inset-0 scale-[1.8] rounded-full bg-lime-400/20 blur-[140px]" />

            {/* Replace later with bot logo */}
            <Image
              src="/goldenGoose.png"
              alt="Misfitz Discord Bot"
              width={220}
              height={220}
              className="rounded-full"
              priority
            />
          </div>

        {/* Eyebrow */}
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/50">
          Misfitz Discord Bot
        </p>

        {/* Headline */}
        <h1 className="mb-4 text-5xl font-black leading-none md:text-7xl">
          THE BOT IS
          <br />
          <span className="bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
            ALMOST READY.
          </span>
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-2xl text-lg text-white/70 md:text-xl">
          Explore the full power of Misfitz Statz directly from Discord.
        </p>
        <p className="mb-10 max-w-2xl text-lg text-white/70 md:text-xl">
          Public release begins on 15th July 2026.
        </p>
        {/* Button */}
        <Link
          href="https://discord.gg/jwSeHD9BrA"
          className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition-all hover:border-[#7CFF00]/50 hover:bg-white/10"
        >
          Join Crash Test Server
        </Link>

        {/* Achievement */}
        <div className="mt-10 rounded-2xl border border-[#7CFF00]/15 bg-[#7CFF00]/5 px-6 py-4 backdrop-blur-xl">
          <p className="font-semibold text-[#7CFF00]">
            Supporter from 1st Hour Badge
          </p>

          <p className="mt-1 text-sm text-white/60">
            Available for everyone joining before 31st July 2026
          </p>
        </div>
      </div>
    </main>
  );
}
