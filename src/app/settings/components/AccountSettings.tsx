"use client";

import type { Account } from "@/lib/auth";

interface AccountSettingsProps {
  loggedIn: boolean;
  account: Account | null;
}

export default function AccountSettings({
  loggedIn,
  account
}: AccountSettingsProps) {
  if (!loggedIn || !account) {
    return (
      <section className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-xl">
        <h2 className="text-2xl font-bold text-red-300">
          Account Settings
        </h2>

        <p className="mt-3 text-white/60">
          You are currently not logged in.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
            Account
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Account Settings
          </h2>

          <p className="mt-2 text-sm text-white/50">
            Your Misfitz Statz account is connected.
          </p>
        </div>

        <div className="rounded-2xl border border-lime-400/20 bg-lime-400/10 px-5 py-4">
          <p className="text-xs uppercase tracking-wider text-lime-300/60">
            Provider
          </p>

          <p className="mt-1 font-semibold text-lime-300">
            {account.provider}
          </p>
        </div>
      </div>
    </section>
  );
}