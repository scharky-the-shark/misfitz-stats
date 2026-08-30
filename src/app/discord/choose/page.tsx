import Link from "next/link";
import Image from "next/image";

const comparisons = [
{
  feature: "Direct Messages",
  website: true,
  bot: false,
  support: false,
},
{
  feature: "Server Installation",
  website: false,
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
  feature: "Personal Tracking",
  website: true,
  bot: true,
  support: true,
},
{
  feature: "Server Leaderboards",
  website: false,
  bot: true,
  support: true,
},
{
  feature: "View Server Members stats",
  website: false,
  bot: true,
  support: true,
},
{
  feature: "Moderation",
  website: false,
  bot: false,
  support: true,
},
{
  feature: "SecurityCore",
  website: false,
  bot: false,
  support: true,
},
{
  feature: "Scam Detection",
  website: false,
  bot: false,
  support: true,
},
{
  feature: "Custom AutoMod",
  website: false,
  bot: false,
  support: true,
},
{
  feature: "Early Access Features",
  website: true,
  bot: false,
  support: false,
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
  <section className="relative mx-auto max-w-7xl px-6 pt-12 text-center">
    <div className="mb-4 text-sm uppercase tracking-[0.35em] text-white/50">
      Compare
    </div>

    <h1 className="mb-6 text-5xl font-black uppercase md:text-7xl">
      PRIVATE BOT
      <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
        OR SERVER BOT
      </span>
    </h1>

    <p className="mx-auto max-w-3xl text-lg text-white/70">
      Every version has a different purpose. Choose what you need
    </p>
  </section>

  <section className="relative mx-auto max-w-7xl px-6 py-12">
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="grid grid-cols-4 border-b border-white/10 p-6 font-bold">
        <div>Feature</div>
        <div className="text-center">Personal Bot</div>
        <div className="text-center">Community Bot</div>
        <div className="text-center">Community Bot +</div>
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

  <section className="relative mx-auto max-w-7xl px-2 pb-20">
      <h2 className="mb-11 text-center text-2xl font-bold">
        By adding the bot to your account or server you agree our TOS and Privacy Policy
      </h2>
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h3 className="mb-4 text-2xl font-bold">Personal</h3>
        <p className="text-white/70">
          Perfect if you interested in your stats. Manage your account from Discord everywhere
        </p>
          <Link
          href="/discord/userBot"
          className="mt-6 inline-flex w-full justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:border-[#00D9FF] hover:bg-[#00D9FF]/10"
          >
            Install Personal Bot
          </Link>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h3 className="mb-4 text-2xl font-bold">
          Community Bot
        </h3>
        <p className="text-white/70">
          Built for active competitives. Power up as a group and compete in server leaderbaords
        </p>
          <Link
            href="/discord/communityBot"
          className="mt-6 inline-flex w-full justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:border-[#7CFF00] hover:bg-[#7CFF00]/10"
          >
            Install Community Bot
          </Link>
      </div>

      <div className="rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 p-8 backdrop-blur-xl">
        <h3 className="mb-4 text-2xl font-bold text-[#7CFF00]">Community Bot +</h3>
        <p className="text-white/70">
          The Statz bot for your server upgraded with server moderation and filters scam
        </p>
          <Link
            href="/discord/communityBotPlus"
            className="mt-6 inline-flex w-full justify-center rounded-2xl border border-[#7CFF00]/30 bg-[#7CFF00]/10 px-6 py-3 font-semibold text-[#7CFF00] transition hover:bg-[#7CFF00]/20"
          >
            Install Community Bot +
          </Link>
      </div>
    </div>
  </section>

  <section className="relative mx-auto max-w-5xl px-6 pb-24">
    <div className="rounded-3xl border border-[#7CFF00]/20 bg-[#7CFF00]/5 p-10 text-center backdrop-blur-xl">
      <h2 className="mb-4 text-4xl font-black uppercase">
        Need a custom Statz Bot?
        <span className="block bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
          Contact us
        </span>
      </h2>
      <p className="mx-auto mb-8 max-w-3xl text-white/70">
        From general features up to tournament hosting
      </p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          href="https://discord.com/invite/74suQKzBkp"
          className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl"
        >
          Start your journey
        </Link>
      </div>
    </div>
  </section>
</main>
);
}
