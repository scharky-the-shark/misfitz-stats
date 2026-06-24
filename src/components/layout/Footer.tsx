export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="flex w-full flex-col items-center justify-between gap-3 px-6 py-4 text-center md:flex-row md:text-left lg:px-12">        
        <div>
          <p className="text-lg font-bold text-[#7CFF00]">
            MISFITZ STATZ
          </p>

          <p className="mt-2 text-sm text-white/45">
            Not owned or affiliated with Antihero Studios
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
          <a
            href="https://www.antiherostudios.com/en?creatorCode=SCHARKY"
            target="_blank"
            className="transition hover:text-[#7CFF00]"
          >
            Register for Playtests
          </a>
          <a
            href="https://discord.gg/bb9bGA9HW4"
            target="_blank"
            className="transition hover:text-[#7CFF00]"
          >
            Discord 
          </a>
          <a
            href="/status"
            target="_blank"
            className="transition hover:text-[#7CFF00]"
          >
            Status
          </a>
          <a
            href="/privacy"
            className="transition hover:text-[#7CFF00]"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="transition hover:text-[#7CFF00]"
          >
            Terms
          </a>
          <a
            href="/legal"
            className="transition hover:text-[#7CFF00]"
          >
            Legal
          </a>
        </div>
      </div>
    </footer>
  );
}