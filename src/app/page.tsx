export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-black tracking-tight">
          MISFITZ
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Community platform, stats, creators and future API tools.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105">
            View Stats
          </button>

          <button className="rounded-2xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10">
            Join Community
          </button>
        </div>
      </section>
    </main>
  );
}