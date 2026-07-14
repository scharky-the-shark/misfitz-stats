"use client";

import Link from "next/link";
import {
  BarChart3,
  Trophy,
  BadgeCheck,
  ChartSpline,
  Terminal,
  Users,
} from "lucide-react";

export default function DiscordPage() {
  return (
    <main className="relative min-h-fit overflow-hidden bg-[#0b1220] text-white select-none">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.12),transparent_35%)]" />

      <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-[#7CFF00]/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#00D9FF]/10 blur-3xl" />

      {/* Hero */}
<section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-20 text-center">

  {/* Bot Icon */}
  <div className="relative mb-1">
    <div className="absolute inset-0 rounded-full bg-[#7CFF00]/20 blur-[8px]" />


  </div>

  {/* Badge */}
  <div className="mb-5 rounded-full border border-[#7CFF00]/10 bg-[#7CFF00]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#7CFF00]">
    Community Edition Extended
  </div>

  {/* Headline */}
  <h1 className="text-5xl font-black uppercase leading-none md:text-7xl">
  Community
  <span className="block">
    <span className="bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
      Bot
    </span>{" "}
    <span className="bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#C9A227] bg-clip-text text-transparent">
      Plus
    </span>
  </span>
</h1>

  <p className="mt-6 max-w-3xl text-lg text-white/70">
    Install the Misfitz Statz Community Bot
    {" "}
      <span className="bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#C9A227] bg-clip-text text-transparent">
         Plus
      </span>
    {" "} 
    to unlock server leaderboards, player verification and advanced community statistics as well as       
    {" "}
      <span className="bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#C9A227] bg-clip-text text-transparent">
        server moderation system and scam filter
      </span>.
  </p>

  {/* Feature Chips */}
  <div className="mt-8 flex flex-wrap justify-center gap-3">

    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
      Includes Community Bot
    </span>

    <span className="rounded-full border border-[#C9A227]/40 bg-gradient-to-r from-[#3B3112] to-[#5A4717] px-4 py-2 text-sm font-medium text-[#FFE082]">
      Scam Filter
    </span>

    <span className="rounded-full border border-[#C9A227]/40 bg-gradient-to-r from-[#3B3112] to-[#5A4717] px-4 py-2 text-sm font-medium text-[#FFE082]">
      Default Automod
    </span>

    <span className="rounded-full border border-[#C9A227]/40 bg-gradient-to-r from-[#3B3112] to-[#5A4717] px-4 py-2 text-sm font-medium text-[#FFE082]">
      Customizable Automod
    </span>

    <span className="rounded-full border border-[#C9A227]/40 bg-gradient-to-r from-[#3B3112] to-[#5A4717] px-4 py-2 text-sm font-medium text-[#FFE082]">
      Invite protection
    </span>

  </div>

  {/* Install Button */}
  <Link
    href="https://discord.com/oauth2/authorize?client_id=1514885656952705155&permissions=5630601193704482&integration_type=0&scope=bot+applications.commands"
    className="mt-10 rounded-2xl border border-[#7CFF00]/30 bg-[#7CFF00]/10 px-10 py-4 text-lg font-semibold text-[#7CFF00] transition hover:bg-[#7CFF00]/20"
  >
    Install Community Bot +
  </Link>

  {/* Small Info */}
  <Link
    href=""
    className="mt-10 rounded-2xl border border-yellow-500/20 bg-yellow-500/40 p-5 backdrop-blur-xl px-10 py-4 text-lg font-semibold text"
  >
    Install instructions soon
  </Link>

</section>

{/* Permissions */}
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
      The Community Bot only requests permissions that are necessary to
      provide its features. Every requested permission has a specific
      purpose and is never requested without reason.
    </p>

  </div>

  <div className="grid gap-6 md:grid-cols-2">

    <div className="rounded-3xl border border-[#C9A227]/25 bg-[#C9A227]/5 p-7 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-semibold text-[#FFE082]">
        Manage server
      </h3>

      <p className="text-white/70">
        Allows the bot to revoke created invites from hacked accounts.
      </p>
    </div>

    <div className="rounded-3xl border border-[#C9A227]/25 bg-[#C9A227]/5 p-7 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-semibold text-[#FFE082]">
        Moderate members
      </h3>

      <p className="text-white/70">
        Allows the bot to moderate timeout members to prevent spamming.
      </p>
    </div>

    <div className="rounded-3xl border border-[#C9A227]/25 bg-[#C9A227]/5 p-7 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-semibold text-[#FFE082]">
        Kick Members
      </h3>

      <p className="text-white/70">
        Remove potential scam bots spamming the ban list of your server. Scam accounts usually last a month or two until they get deleted from Discord 
      </p>
    </div>

    <div className="rounded-3xl border border-[#C9A227]/25 bg-[#C9A227]/5 p-7 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-semibold text-[#FFE082]">
        Manage Messages
      </h3>

      <p className="text-white/70">
        Allows the bot to moderate channels.
      </p>
    </div>
 
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
        Bypass Slowmode
      </h3>

      <p className="text-white/70">
        The bot comes with unique emojis for all interactions to glow up stats 
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-semibold">
        Embed Links
      </h3>

      <p className="text-white/70">
        Used to display rich statistic cards, leaderboards and other
        formatted information.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-semibold">
        View Channels
      </h3>

      <p className="text-white/70">
        Required to receive commands and respond in channels
        where access is given.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-semibold">
        Read Message History
      </h3>

      <p className="text-white/70">
        Allows the bot to correctly process interactions and prevent
        duplicate responses.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-semibold">
        Use Slash Commands
      </h3>

      <p className="text-white/70">
        Allows the bot to answer requested
        statistics inside your server viewable for everyone.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-semibold">
        Attach Files
      </h3>

      <p className="text-white/70">
        Some commands are creating files like diagrams to display stats
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
      <h3 className="mb-3 text-xl font-semibold">
        Use External Emojis
      </h3>

      <p className="text-white/70">
        The bot comes with unique emojis for all interactions to glow up stats 
      </p>
    </div>
  </div>

  <div className="mt-10 rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 p-8 backdrop-blur-xl">

    <h3 className="mb-3 text-2xl font-bold text-[#7CFF00]">
      Security First
    </h3>

    <p className="font-bold text-white/70">
      Misfitz Statz only requests permissions that are required for its
      functionality. We recommend you to never give bots full admin perms
    </p>

  </div>

</section>
{/* Features */}
<section className="relative mx-auto max-w-7xl px-6 py-20">

  <div className="mb-14 text-center">
    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/50">
      Features
    </p>

    <h2 className="text-4xl font-black uppercase">
      Everything your
      <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
        Community Needs
      </span>
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
      Powerful tools designed for communities that want to track player
      progress, verify members and compete through integrated statistics.
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
      <Trophy
        size={38}
        strokeWidth={2}
        className="mb-6 text-white"
      />

      <h3 className="mb-3 text-2xl font-bold">
        Leaderboards
      </h3>

      <p className="text-white/70">
        Compare members with server-exclusive rankings and seasonal competition.
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
      <Users
        size={38}
        strokeWidth={2}
        className="mb-6 text-white"
      />

      <h3 className="mb-3 text-2xl font-bold">
        Community Ready
      </h3>

      <p className="text-white/70">
        Designed for gaming communities of every size, from small groups to large public servers.
      </p>
    </div>

  </div>

</section>

{/* FAQ */}
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
      Everything you should know before installing the Community Bot.
    </p>
  </div>

  <div className="space-y-5">

    <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <summary className="cursor-pointer list-none text-lg font-semibold">
        Is the Community Bot free?
      </summary>

      <p className="mt-4 text-white/70">
        Yes the Community Bot is free for everyone. However the this bot does not include server moderation.
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
        Does the bot need "Manage Server" permission?
      </summary>

      <p className="mt-4 text-white/70">
        Yes, if you want to prevent that scam bots creating invites to raid the servers you have to enable it for the bot. If you don't want to autodelete invites you can disable them.
      </p>
    </details>

    <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <summary className="cursor-pointer list-none text-lg font-semibold">
        Does the bot use AI for moderation?
      </summary>

      <p className="mt-4 text-white/70">
        No, server messages are not sent to an AI to check moderation rules. The bot only compare messages internaly if they contain blacklisted words or phrases.
      </p>
    </details>

    <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <summary className="cursor-pointer list-none text-lg font-semibold">
        Does the bot replaces real moderators?
      </summary>

      <p className="mt-4 text-white/70">
        No the bot can only detect common scam/ phising methods which are hardcoded. Not every scam is well known to get a special fiöter but we try to filter as much as possible
      </p>
    </details>

    <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <summary className="cursor-pointer list-none text-lg font-semibold">
        Will the bot contain moderation commands?
      </summary>

      <p className="mt-4 text-white/70">
        No, Misfitz Statz should keep it's focus on the game. The moderation system will be regularly be updated but won't add deeper moderation features then automod customization.
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
        Who can use the Community Bot?
      </summary>

      <p className="mt-4 text-white/70">
        Everyone can use the community bot as long as users are not flagged or suspended from Misfitz Statz.
      </p>
    </details>

    <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <summary className="cursor-pointer list-none text-lg font-semibold">
        Can I remove the bot later?
      </summary>

      <p className="mt-4 text-white/70">
        You can remove the bot from your server at any time. This will not result in deletion of collected server data. Contact us for removal of server data
      </p>
    </details>

    <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <summary className="cursor-pointer list-none text-lg font-semibold">
        Where can I get support?
      </summary>

      <p className="mt-4 text-white/70">
        The best way for fast support is to join our
        {" "}
        <Link href="https://discord.gg/74suQKzBkp" className="underline hover:text-white">
          Support Server
        </Link>
      </p>
    </details>

  </div>

</section>
{/* Final CTA */}
<section className="relative mx-auto max-w-5xl px-6 pb-24">

  <div className="rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 p-12 text-center backdrop-blur-xl">

    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/50">
      Community Bot +
    </p>

    <h2 className="text-4xl font-black uppercase">
      Ready to Install?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
      Enhance the power of Misfitz Statz!
    </p>

    <Link
      href="https://discord.com/oauth2/authorize?client_id=1514885656952705155&permissions=5630601193704482&integration_type=0&scope=bot+applications.commands"
      className="mt-10 inline-flex rounded-2xl border border-[#7CFF00]/30 bg-[#7CFF00]/10 px-10 py-4 text-lg font-semibold text-[#7CFF00] transition hover:bg-[#7CFF00]/20"
    >
      Install Community Bot +
    </Link>

    <p className="mt-8 text-sm text-white/45">
      By installing the Community Bot Plus you agree to our
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
