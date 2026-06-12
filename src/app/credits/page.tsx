export const metadata = {
  title: "Credits | Misfitz Stats",
  description:
    "Acknowledgements and attribution for technologies, assets, creators, and services used by Misfitz Stats.",
};

function CreditSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>

      <div className="space-y-4 text-sm leading-7 text-zinc-300">
        {children}
      </div>
    </section>
  );
}

export default function CreditsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-16">
        <h1 className="mb-4 text-4xl font-bold">Credits</h1>

        <p className="max-w-3xl text-zinc-400">
          Acknowledgements and attribution for technologies,
          assets, creators, and services used by Misfitz Stats.
        </p>
      </div>

      <div className="space-y-8">
        <CreditSection title="Game Assets & Intellectual Property">
          <p>
            <strong>Game:</strong> Misfitz
          </p>

          <p>
            <strong>Developer:</strong> Antihero Studios
          </p>

          <p>
            Game assets, logos, trademarks, screenshots,
            artwork, and related intellectual property belong
            to their respective owners.
          </p>

          <p>
            Their appearance on Misfitz Stats is for
            informational, identification, and community
            purposes only.
          </p>
        </CreditSection>

        <CreditSection title="Creator Contributions">
          <p>
            <strong>Creator:</strong> @oguiee
          </p>
          <p>
             Relic on the error page drawn by @oguiee
          </p>
          <p>
            <strong>Creator:</strong> @thatkoza
          </p>
          <p>
             Error page for unsupported devices drawn
          </p>
          <p>
            Creator-provided screenshots, media, artwork,
            promotional material, and other content remain
            the property of their respective creator.
          </p>

          <p>
            Creator content is displayed with attribution
            where applicable.
          </p>
        </CreditSection>

        <CreditSection title="Open Source Technologies">
          <p>
            Misfitz Stats is built using open-source software
            maintained by their respective communities and
            contributors.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Next.js</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>ESLint</li>
          </ul>
        </CreditSection>

        <CreditSection title="Infrastructure">
          <p>
            Infrastructure and network services are provided
            through third-party platforms.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Amazon Web Services (AWS)</li>
            <li>Cloudflare</li>
          </ul>
        </CreditSection>
      </div>
    </main>
  );
}
