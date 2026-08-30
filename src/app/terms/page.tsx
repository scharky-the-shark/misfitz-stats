export const metadata = {
  title: "Terms of Service | Misfitz Stats",
  description: "Terms and conditions governing the use of Misfitz Stats and its related services.",
};

function TermsSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-3xl font-bold tracking-tight">
        {title}
      </h2>

      <div className="space-y-4 text-sm leading-7 text-zinc-300">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
return (
<main className="mx-auto max-w-7xl px-6 py-16">
  <div className="mb-16">
    <h1 className="mb-4 text-4xl font-bold">
      Terms of Service
    </h1>
    <p className="text-sm text-zinc-400">
      Last Updated: 4th June 2026
    </p>
    <p className="mt-6 max-w-3xl text-zinc-400">
      These Terms of Service govern access to and use of
      Misfitz Stats and its related services.
    </p>
  </div>

  <div className="grid gap-20 lg:grid-cols-[260px_1fr]">
    <aside className="sticky top-28 h-fit self-start">
      <div className="border-l border-zinc-800 pl-6">
        <p className="mb-8 text-xs uppercase tracking-[0.35em] text-zinc-500">
          Table of Contents
        </p>

        <nav className="flex flex-col gap-5 text-sm">
          <a href="#acceptance">01 Acceptance of Terms</a>
          <a href="#service">02 About the Service</a>
          <a href="#eligibility">03 Eligibility</a>
          <a href="#accounts">04 User Accounts</a>
          <a href="#leaderboards">05 Leaderboards</a>
          <a href="#acceptable-use">06 Acceptable Use</a>
          <a href="#community">07 Community Standards</a>
          <a href="#enforcement">08 Enforcement Actions</a>
          <a href="#availability">09 Service Availability</a>
          <a href="#accuracy">10 Data Accuracy</a>
          <a href="#api">11 API and Data Usage</a>
          <a href="#ip">12 Intellectual Property</a>
          <a href="#deletion">13 Account Deletion</a>
          <a href="#liability">14 Limitation of Liability</a>
          <a href="#changes">15 Changes to Terms</a>
          <a href="#contact">16 Contact</a>
        </nav>
      </div>
    </aside>

    <div className="space-y-24">
      <TermsSection
        id="acceptance"
        title="Acceptance of Terms"
      >
        <p>
          By accessing or using Misfitz Stats ("the Service"),
          you agree to be bound by these Terms of Service.
        </p>

        <p>
          If you do not agree with these Terms, you must not
          use the Service.
        </p>
      </TermsSection>

      <TermsSection
        id="service"
        title="About the Service"
      >
        <p>
          Misfitz Stats is an independent fan-made statistics
          and leaderboard platform for the game Misfitz.
        </p>

        <p>
          The Service is operated as a non-commercial
          community hobby project.
        </p>

        <p>
          Misfitz Stats is not affiliated with, endorsed by,
          sponsored by, or officially associated with
          Antihero Studios.
        </p>
      </TermsSection>

      <TermsSection
        id="eligibility"
        title="Eligibility"
      >
        <p>
          To use account-related features, users must comply
          with Discord's minimum age requirements and Terms
          of Service.
        </p>

        <p>
          Users are responsible for maintaining access to
          their Discord account.
        </p>
      </TermsSection>

      <TermsSection
        id="accounts"
        title="User Accounts"
      >
        <p>
          Authentication is provided through Discord OAuth.
        </p>

        <p>
          Users may verify ownership of a Misfitz account
          through the verification system provided by
          Misfitz Stats.
        </p>

        <p>
          Users are responsible for ensuring that account
          information remains accurate through the
          respective source services.
        </p>
      </TermsSection>

      <TermsSection
        id="leaderboards"
        title="Leaderboards and Public Profiles"
      >
        <p>
          Misfitz Stats may display public leaderboards
          containing public in-game names, ranking
          positions, and relevant leaderboard statistics.
        </p>

        <p>
          Users may use available privacy settings such as
          Anonymous or Private profile modes where
          supported.
        </p>

        <p>
          Certain leaderboard information may remain visible
          where required for ranking integrity.
        </p>
      </TermsSection>

      <TermsSection
        id="acceptable-use"
        title="Acceptable Use"
      >
        <p>Users agree not to:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Abuse, disrupt, or interfere with the Service</li>
          <li>Attempt to bypass security systems</li>
          <li>Circumvent rate limits or cooldown systems</li>
          <li>Use bots, crawlers, scripts, or scraping tools</li>
          <li>Access data through unofficial methods</li>
          <li>Create third-party services using Misfitz Stats data without permission</li>
          <li>Generate excessive requests</li>
          <li>Attempt unauthorized access to systems or infrastructure</li>
        </ul>

        <p>
          The Service currently limits requests to a maximum
          of 20 requests per minute per user where
          applicable.
        </p>
      </TermsSection>

      <TermsSection
        id="community"
        title="Reporting and Community Standards"
      >
        <p>
          Users are encouraged to report inappropriate,
          offensive, or harmful in-game names through
          available reporting features.
        </p>

        <p>
          Misfitz Stats reserves the right to restrict
          visibility of such accounts or exclude them from
          the platform.
        </p>
      </TermsSection>

      <TermsSection
        id="enforcement"
        title="Enforcement Actions"
      >
        <p>
          Misfitz Stats reserves the right to take action
          against accounts that violate these Terms.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Removal of account verification</li>
          <li>Temporary restrictions</li>
          <li>Permanent blacklisting of player IDs</li>
          <li>Deletion of linked accounts</li>
          <li>Restriction of access to the Service</li>
        </ul>

        <p>
          Such decisions may be made at the reasonable
          discretion of the operator.
        </p>
      </TermsSection>

      <TermsSection
        id="availability"
        title="Availability of the Service"
      >
        <p>
          The Service is provided on an "as is" and
          "as available" basis.
        </p>

        <p>
          Continuous availability, uninterrupted operation,
          and permanent feature availability are not
          guaranteed.
        </p>
      </TermsSection>

      <TermsSection
        id="accuracy"
        title="Statistics and Data Accuracy"
      >
        <p>
          Statistics displayed on Misfitz Stats originate
          from third-party sources including the Misfitz API.
        </p>

        <p>
          Accuracy, completeness, availability, and
          timeliness of displayed information cannot be
          guaranteed.
        </p>
      </TermsSection>

      <TermsSection
        id="api"
        title="API and Data Usage"
      >
        <p>
          Data provided through Misfitz Stats is intended
          solely for use through the official website.
        </p>

        <p>
          Unless explicitly authorized, users may not:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Mirror data</li>
          <li>Redistribute data</li>
          <li>Create competing services</li>
          <li>Create automated monitoring systems</li>
          <li>Access data through unofficial methods</li>
        </ul>

        <p>
          Any commercial or large-scale use requires prior
          permission by the operater.
        </p>
      </TermsSection>

      <TermsSection
        id="ip"
        title="Intellectual Property"
      >
        <p>
          The Misfitz Stats platform, website design,
          branding, and original content remain the property
          of Misfitz Stats.
        </p>

        <p>
          Misfitz and related game assets remain the
          property of their respective owners.
        </p>
      </TermsSection>

      <TermsSection
        id="deletion"
        title="Data Retention and Account Deletion"
      >
        <p>
          Accounts and associated data may be automatically
          removed after 180 days of inactivity.
        </p>

        <p>
          Users may delete their account and associated data
          through the available account deletion feature or
          by contacting the operator.
        </p>
      </TermsSection>

      <TermsSection
        id="liability"
        title="Limitation of Liability"
      >
        <p>
          To the maximum extent permitted by applicable law,
          Misfitz Stats shall not be liable for service
          interruptions, data loss, incorrect statistics,
          ranking inaccuracies, or third-party failures.
        </p>

        <p>
          Use of the Service is entirely at the user's own
          risk.
        </p>
      </TermsSection>

      <TermsSection
        id="changes"
        title="Changes to the Service and Terms"
      >
        <p>
          Misfitz Stats reserves the right to modify,
          suspend, limit, or discontinue any part of the
          Service at any time.
        </p>

        <p>
          Continued use of the Service after changes become
          effective constitutes acceptance of revised Terms.
        </p>
      </TermsSection>

      <TermsSection
        id="contact"
        title="Contact"
      >
        <p>
          Questions regarding these Terms may be submitted
          through the contact methods listed on the Misfitz
          Stats website.
        </p>

        <p>
          <a
            href="mailto:scharky.the.shark.official@gmail.com?subject=Terms%20of%20Service%20Inquiry"
            className="underline"
          >
            scharky.the.shark.official@gmail.com
          </a>
        </p>
      </TermsSection>
    </div>
  </div>
</main>
);
}