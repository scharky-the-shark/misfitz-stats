"use client";

import Link from "next/link";
import {
  BarChart3,
  Settings,
  BadgeCheck,
  ChartSpline,
  Terminal,
  Users,
} from "lucide-react";

export default function DiscordPage() {
return (
<main className="relative min-h-fit overflow-hidden bg-[#0b1220] text-white select-none">
<section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 text-center">
  <div className="relative mb-1">
    <div className="absolute inset-0 rounded-full bg-[#7CFF00]/20 blur-[8px]" />
  </div>
  <div className="mb-5 rounded-full border border-[#7CFF00]/10 bg-[#7CFF00]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#7CFF00]">
    User Edition
  </div>
  <h1 className="text-5xl font-black uppercase leading-none md:text-7xl">
    PRIVATE
    <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
      Bot
    </span>
  </h1>
  <p className="mt-6 max-w-3xl text-lg text-white/70">
    Install the Misfitz Statz User Bot to gain access to more
    features of Misfitz Statz.
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-3">
    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">Get Statistics</span>
    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">Secure Verification</span>
    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">Player Tracking</span>
    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">Private Usage</span>
  </div>

  <Link
    href="https://discord.com/oauth2/authorize?client_id=1514885656952705155&integration_type=1&scope=applications.commands"      
    className="mt-10 rounded-2xl border border-[#7CFF00]/30 bg-[#7CFF00]/10 px-10 py-4 text-lg font-semibold text-[#7CFF00] transition hover:bg-[#7CFF00]/20"
  >
    Install User Bot
  </Link>
</section>

<section className="relative mx-auto max-w-7xl px-6 py-24">
  <div className="mx-auto mb-14 max-w-3xl text-center">
    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/50">
      Permissions
    </p>
    <h2 className="text-4xl font-black uppercase">
      Why are these permissions
      <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
        Required?
      </span>
    </h2>
    <p className="mt-6 text-lg text-white/70">
      The User Bot only requests permissions that are necessary to
      provide its features. Every requested permission has a specific
      purpose and is never requested without reason.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-semibold">
        Send Messages
      </h3>
      <p className="text-white/70">
        Allows the bot to answer slash commands.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-semibold">
        View profile
      </h3>
      <p className="text-white/70">
        Required to create a Misfitz Statz account and content data to your ID
      </p>
    </div>
  </div>

  <div className="mt-10 rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 p-8 backdrop-blur-xl">
    <h3 className="mb-3 text-2xl font-bold text-[#7CFF00]">
      Security First
    </h3>
    <p className="font-bold text-white/70">
      Misfitz Statz only requests permissions that are required for its functionality. 
      We recommend you to never give bots perms that may danger your privacy or account in total
    </p>
  </div>
</section>

<section className="relative mx-auto max-w-7xl px-6 py-20">
  <div className="mb-14 text-center">
    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/50">
      Features
    </p>
    <h2 className="text-4xl font-black uppercase">
      <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
        Everything you need
      </span>
    </h2>
    <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
      More then Misfitz Statz page has - track your stats, get diagrams and manage your settings from Discord
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/7">
      <BarChart3
        size={38}
        strokeWidth={2}
        className="mb-6 text-white"
      />
      <h3 className="mb-3 text-2xl font-bold">
        Statistics
      </h3>
      <p className="text-white/70">
        Access detailed player statistics directly from your Discord server.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/7">
      <BadgeCheck
        size={38}
        strokeWidth={2}
        className="mb-6 text-white"
      />
      <h3 className="mb-3 text-2xl font-bold">
        Verification
      </h3>
      <p className="text-white/70">
        Securely connect Discord users with their Misfitz player accounts.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/7">
      <ChartSpline
        size={38}
        strokeWidth={2}
        className="mb-6 text-white"
      />
      <h3 className="mb-3 text-2xl font-bold">
        Tracking
      </h3>
      <p className="text-white/70">
        Follow player progression with automatically updated historical data.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/7">
      <Terminal
        size={38}
        strokeWidth={2}
        className="mb-6 text-white"
      />
      <h3 className="mb-3 text-2xl font-bold">
        Slash Commands
      </h3>
      <p className="text-white/70">
        Fast, responsive commands built directly into the Discord interface.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/7">
      <Settings
        size={38}
        strokeWidth={2}
        className="mb-6 text-white"
      />
      <h3 className="mb-3 text-2xl font-bold">
        Settings
      </h3>
      <p className="text-white/70">
        Manage your settings completely via Discord (Account deletion excluded)
      </p>
    </div>
  </div>
</section>

<section className="relative mx-auto max-w-5xl px-6 py-24">
  <div className="mb-14 text-center">
    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/50">
      FAQ
    </p>
    <h2 className="text-4xl font-black uppercase">
      Frequently Asked
      <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
        Questions
      </span>
    </h2>
    <p className="mt-6 text-lg text-white/70">
      Everything you should know before installing the User Bot.
    </p>
  </div>

  <div className="space-y-5">
    <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <summary className="cursor-pointer list-none text-lg font-semibold">
        Is the Bot free?
      </summary>
      <p className="mt-4 text-white/70">
        Yes the Bot is free for everyone. However leaderboards are not included as they need other server members to compete
      </p>
    </details>

    <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <summary className="cursor-pointer list-none text-lg font-semibold">
        Why does the bot request these permissions?
      </summary>
      <p className="mt-4 text-white/70">
        The requested permissions are needed to ensure a smooth operation.
      </p>
    </details>

    <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <summary className="cursor-pointer list-none text-lg font-semibold">
        Does the bot store messages?
      </summary>
      <p className="mt-4 text-white/70">
        No the bot does not store messages. The bot stores only interaction errors to investigate errors quickly.
      </p>
    </details>

    <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <summary className="cursor-pointer list-none text-lg font-semibold">
        Who can use the  Bot?
      </summary>
      <p className="mt-4 text-white/70">
        Everyone can use the bot as long as users are not flagged or suspended from Misfitz Statz.
      </p>
    </details>

    <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <summary className="cursor-pointer list-none text-lg font-semibold">
        Where can I get support?
      </summary>
      <p className="mt-4 text-white/70">
        The best way for fast support is to join our
        {" "}
        <Link href="https://discord.gg/jwSeHD9BrA" className="underline hover:text-white">
          Support Server
        </Link>
      </p>
    </details>
  </div>
</section>

<section className="relative mx-auto max-w-5xl px-6 pb-24">
  <div className="rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 p-12 text-center backdrop-blur-xl">
    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/50">
      Private/ User Bot
    </p>
    <h2 className="text-4xl font-black uppercase">
      Ready to Install?
    </h2>
    <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
      Upgrade your access now!
    </p>
    <Link
      href="https://discord.com/oauth2/authorize?client_id=1514885656952705155&integration_type=1&scope=applications.commands"      
      className="mt-10 inline-flex rounded-2xl border border-[#7CFF00]/30 bg-[#7CFF00]/10 px-10 py-4 text-lg font-semibold text-[#7CFF00] transition hover:bg-[#7CFF00]/20"
    >
      Install User Bot
    </Link>
    <p className="mt-8 text-sm text-white/45">
      By installing the User Bot you agree to our
      {" "}
      <Link href="/terms" className="underline hover:text-white">
        Terms of Service
      </Link>
      {" "}
      and
      {" "}
      <Link href="/privacy" className="underline hover:text-white">
        Privacy Policy
      </Link>.
    </p>
  </div>
</section>
</main>
);
}
