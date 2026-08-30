import Link from "next/link";

const commands = [
  {
    command: "/stats",
    description: [
      "Search a player by ID",
      "Get stats from a Discord user",
    ],
  },
  {
    command: "/verify",
    description: [
      "Start the verification process directly from Discord",
    ],
  },
  {
    command: "/report",
    description: [
      "Report an inappropriate in-game name",
    ],
  },
  {
    command: "/track",
    description: [
      "Choose an account to track",
      "Unlocks access to /graph",
    ],
  },
  {
    command: "/graph",
    description: [
      "Display your last 2 weeks of stats as a graph",
      "Requires active tracking",
    ],
  },
  {
    command: "/leaderboards",
    description: [
      "Open the leaderboard menu",
      "Choose a leaderboard to display",
    ],
  },
  {
    command: "/collection",
    description: [
      "Display a collection by Player ID",
      "Filter by season and rarity",
    ],
  },
  {
    command: "/me",
    description: [
      "List all verified Player IDs",
      "Copy-paste ready output",
    ],
  },
  {
    command: "/about",
    description: [
      "Information about the bot",
      "Links to Terms of Service and Privacy Policy",
    ],
  },
  {
    command: "/help",
    description: [
      "Solve common issues",
      "Support Server invite",
      "Website links",
    ],
  },
  {
    command: "/settings",
    description: [
      "List all verified accounts",
      "Change privacy settings",
      "Remove linked accounts",
      "Keeps your data private at all times",
    ],
  },
  {
    command: "/system",
    description: [
      "Bot and website information",
      "Uptime and latency",
    ],
  },
];

export default function DiscordCommandsPage() {
return (
<main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">
  <section className="relative mx-auto max-w-7xl px-6 pt-24 text-center">
    <div className="mb-4 text-sm uppercase tracking-[0.35em] text-white/50">
      Discord Commands
    </div>

    <h1 className="mb-6 text-5xl font-black uppercase md:text-7xl">
      WHAT THE BOT
      <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
        OFFERS
      </span>
    </h1>

    <p className="mx-auto max-w-3xl text-lg text-white/70">
      Explore player statistics, collections, leaderboards,
      tracking and account management directly from Discord.
    </p>

    <h1 className="bold md:text-4xl block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
      Enhance the full power of Misfitz Statz
    </h1>      
  </section>

  <section className="relative mx-auto max-w-7xl px-6 py-16">
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {commands.map((item) => (
        <div
          key={item.command}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300"
        >
          <h2 className="mb-4 text-2xl font-bold text-[#7CFF00]">
            {item.command}
          </h2>
          <ul className="space-y-2 text-white/75">
            {item.description.map((line) => (
              <li key={line}>• {line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>

  <section className="relative mx-auto max-w-4xl px-6 pb-24">
    <div className="rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 p-10 text-center backdrop-blur-xl">
      <h2 className="mb-4 text-4xl font-bold">
        Ready to get started?
      </h2>

      <p className="mx-auto mb-8 max-w-2xl text-white/70">
        Install the Misfitz Discord Bot and access statistics,
        collections, leaderboards and tracking directly from Discord.
      </p>

      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          href="/discord/choose"
          className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:border-[#7CFF00]/50"
        >
          Add to Discord Server
        </Link>

        <Link
          href="/discord/userBot"
          className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:border-[#00D9FF]/50"
        >
          User Install
        </Link>
      </div>
    </div>
  </section>
</main>
);
}