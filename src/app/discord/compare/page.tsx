import Link from "next/link";
import Image from "next/image";

const comparisons = [
    {
    feature: "Meta maker",
    website: true,
    bot: false,
    support: false,
  },
  {
    feature: "Tutorials",
    website: true,
    bot: false,
    support: true,
  },
  {
    feature: "Leaderboards",
    website: true,
    bot: true,
    support: true,
  },
  {
    feature: "Account Verification",
    website: true,
    bot: true,
    support: true,
  },
  {
    feature: "Privacy Settings",
    website: true,
    bot: true,
    support: true,
  },
  {
    feature: "View Player Statistics",
    website: true,
    bot: true,
    support: false,
  },
  {
    feature: "Full account stats",
    website: false,
    bot: true,
    support: false,
  },
  {
    feature: "Account Tracking",
    website: false,
    bot: true,
    support: false,
  },
  {
    feature: "Statistic Graphs",
    website: false,
    bot: true,
    support: false,
  },
  {
    feature: "Support",
    website: false,
    bot: true,
    support: true,
  },
  {
    feature: "Bug Reports",
    website: false,
    bot: true,
    support: true,
  },
  {
    feature: "Direct Developer Contact",
    website: false,
    bot: false,
    support: true,
  },
  {
    feature: "New features in test",
    website: false,
    bot: false,
    support: true,
  },
  {
    feature: "Exclusive Announcements",
    website: false,
    bot: false,
    support: true,
  },
  {
    feature: "Event hosting mangement",
    website: false,
    bot: false,
    support: true,
  },

];

function StatusIcon({ value }: { value: boolean }) {
  return (
    <Image
      src={value ? "/images/check.png" : "/images/cross.png"}
      alt={value ? "Available" : "Unavailable"}
      width={24}
      height={24}
    />
  );
}

export default function DiscordComparePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-lime-500/10 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pt-24 text-center">
        <div className="mb-4 text-sm uppercase tracking-[0.35em] text-white/50">
          Compare
        </div>

        <h1 className="mb-6 text-5xl font-black uppercase md:text-7xl">
          WEBSITE, BOT
          <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
            OR SUPPORT SERVER?
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-white/70">
          Every platform has a different purpose. Compare features and discover
          which one fits your needs.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="grid grid-cols-4 border-b border-white/10 p-6 font-bold">
            <div>Feature</div>
            <div className="text-center">Website</div>
            <div className="text-center">Bot</div>
            <div className="text-center">Support</div>
          </div>

          {comparisons.map((item) => (
            <div
              key={item.feature}
              className="grid grid-cols-4 border-b border-white/5 p-5 last:border-0"
            >
              <div className="font-medium">{item.feature}</div>

              <div className="flex justify-center">
                <StatusIcon value={item.website} />
              </div>

              <div className="flex justify-center">
                <StatusIcon value={item.bot} />
              </div>

              <div className="flex justify-center">
                <StatusIcon value={item.support} />
              </div>
            </div>
          ))}
        </div>
      </section>
<p className="flex justify-center mb-4 text-2xl">
            Note: Some features may require an Misfitz Statz account for use
          </p>
      {/* Explanation Cards */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-4 text-2xl font-bold">Website</h3>

            <p className="text-white/70">
              Perfect for browsing statistics, crashtest own Meta and
              comparing players through leaderboards.
            </p>
          </div>

          <div className="rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 p-8 backdrop-blur-xl">
            <h3 className="mb-4 text-2xl font-bold text-[#7CFF00]">
              Discord Bot
            </h3>

            <p className="text-white/70">
              Built for active players. Manage accounts on mobile,
              enable tracking and access personal features directly from Discord.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-4 text-2xl font-bold">Support Server</h3>

            <p className="text-white/70">
              Report bugs, receive announcements, contact developers and join
              the community.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 p-10 text-center backdrop-blur-xl">
          <h2 className="mb-4 text-4xl font-black uppercase">
            The Best Experience
            <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
              Uses All Three
            </span>
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-white/70">
            Browse statistics on the website, share your stats with the bot
            and stay connected through the support server.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/stats"
              className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl"
            >
              Open Website
            </Link>

            <Link
              href="/discord/install"
              className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl"
            >
              Install Bot
            </Link>

            <Link
              href="/discord"
              className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl"
            >
              Join Support Server
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
