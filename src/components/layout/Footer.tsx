export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="flex w-full flex-col items-center justify-between gap-3 px-6 py-4 text-center md:flex-row md:text-left lg:px-12">        <div>
          <p className="text-lg font-bold text-[#7CFF00]">
            MISFITZ STATS PAGE
          </p>

          <p className="mt-2 text-sm text-white/45">
            Platform for statistics, tutorials and
            leaderboards.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
          <a
            href="https://www.antiherostudios.com"
            target="_blank"
            className="transition hover:text-[#7CFF00]"
          >
            Official Studio
          </a>

          <a
            href="https://www.antiherostudios.com/en?creatorCode=SCHARKY"
            target="_blank"
            className="transition hover:text-[#7CFF00]"
          >
            Register for Playtests
          </a>

          <a className="transition hover:text-[#7CFF00]">
            Discord
          </a>

          <a className="transition hover:text-[#00D9FF]">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}