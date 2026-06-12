// src/app/settings/page.tsx

"use client";

import { useEffect, useState } from "react";
import DeleteAccountModal from "@/components/settings/DeleteAccountModal";
import { API_URL } from "@/lib/api";

type PrivacyLevel =
  | "open"
  | "hidden"
  | "anonymous"
  | "private";

interface LinkedAccount {
  playerId: string;
  verified: boolean;
  privacy: PrivacyLevel;
}

interface AccountData {
  discordId: string;
  roles: string[];
  linkedAccounts: LinkedAccount[];
}

const privacyDescriptions: Record<PrivacyLevel, string> = {
  open: "Visible on leaderboards and searchable.",
  hidden: "Searchable but excluded from leaderboards.",
  anonymous: "Shown as Anonymous on leaderboards and not searchable.",
  private:
    "Only visible to you and excluded from global statistics."
};


const privacyStyles = {
  open: {
    label: "OPEN",
    className:
      "border-cyan-400/40 bg-cyan-500/20 text-cyan-300"
  },
  hidden: {
    label: "HIDDEN",
    className:
      "border-yellow-400/40 bg-yellow-500/20 text-yellow-300"
  },
  anonymous: {
    label: "ANONYMOUS",
    className:
      "border-purple-400/40 bg-purple-500/20 text-purple-300"
  },
  private: {
    label: "PRIVATE",
    className:
      "border-red-400/40 bg-red-500/20 text-red-300"
  }
};

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [account, setAccount] =
    useState<AccountData | null>(null);

  const [savingPlayer, setSavingPlayer] =
    useState<string | null>(null);

  useEffect(() => {
    loadAccount();
  }, []);

  async function loadAccount() {
    try {
      const res = await fetch(
        `${API_URL}/auth/me`,
        {
          credentials: "include"
        }
      );

      const data = await res.json();

      if (data.loggedIn) {
        setAccount(data.account);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }


  async function updatePrivacy(
    playerId: string,
    privacy: PrivacyLevel
  ) {
    try {
      setSavingPlayer(playerId);

      const res = await fetch(
        `${API_URL}/auth/privacy`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            playerId,
            privacy
          })
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update privacy");
      }

      setAccount((prev) => {
        if (!prev) return prev;

        return {
          ...prev,
          linkedAccounts: prev.linkedAccounts.map(
            (acc) =>
              acc.playerId === playerId
                ? { ...acc, privacy }
                : acc
          )
        };
      });
    } catch (error) {
      console.error(error);
      alert("Failed to update privacy.");
    } finally {
      setSavingPlayer(null);
    }
  }

  async function deleteAccount() {

  try {

    const res = await fetch(
      `${API_URL}/auth/account`,
      {
        method: "DELETE",
        credentials: "include"
      }
    );

    const data = await res.json();

    if (data.success) {

      window.location.href = "/";

    } else {

      alert("Failed to delete account.");

    }

  } catch (error) {

    console.error(error);

    alert("Failed to delete account.");

  }
}


  if (loading) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-5xl font-black uppercase">
            Settings
          </h1>

          <p className="mt-4 text-white/60">
            Loading...
          </p>
        </section>
      </main>
    );
  }

  const linkedAccounts =
    account?.linkedAccounts ?? [];

  const openCount = linkedAccounts.filter(
    (a) => a.privacy === "open"
  ).length;

  const hiddenCount = linkedAccounts.filter(
    (a) => a.privacy === "hidden"
  ).length;

  const anonymousCount = linkedAccounts.filter(
    (a) => a.privacy === "anonymous"
  ).length;

  const privateCount = linkedAccounts.filter(
    (a) => a.privacy === "private"
  ).length;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1220] text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.12),transparent_35%)]" />

      <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-[#7CFF00]/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#00D9FF]/10 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">

        <h1 className="text-5xl font-black uppercase tracking-wider md:text-6xl">
          Settings
        </h1>

        <p className="mt-4 max-w-2xl text-white/70">
          Manage privacy settings for your verified
          Misfitz accounts.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-4">

          <StatCard title="Open" value={openCount} />
          <StatCard title="Hidden" value={hiddenCount} />
          <StatCard title="Anonymous" value={anonymousCount} />
          <StatCard title="Private" value={privateCount} />

        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

          <h2 className="mb-6 text-2xl font-bold">
            Linked Accounts
          </h2>

          <div className="space-y-4">

            {linkedAccounts.length === 0 && (
              <p className="text-white/60">
                No verified accounts found.
              </p>
            )}


            {linkedAccounts.map((account) => (
              
              <div
                key={account.playerId}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                  <div>
                    <p className="text-sm text-white/50">
                      Player ID
                    </p>

                    <p className="mt-1 font-mono text-lg font-bold">
                      {account.playerId}
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                      {
                        privacyDescriptions[
                          account.privacy
                        ]
                      }
                    </p>
                  </div>

                <div className="flex flex-wrap gap-2">

                  {(
                    [
                      "open",
                      "hidden",
                      "anonymous",
                      "private"
                    ] as PrivacyLevel[]
                  ).map((privacy) => {

                    const active =
                      account.privacy === privacy;

                    return (
                      <button
                        key={privacy}
                        disabled={
                          savingPlayer === account.playerId
                        }
                        onClick={() =>
                          updatePrivacy(
                            account.playerId,
                            privacy
                          )
                        }
                        className={`
                          rounded-xl
                          border
                          px-3
                          py-2
                          text-xs
                          font-bold
                          transition

                          ${
                            active
                              ? privacyStyles[privacy]
                                  .className
                              : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
                          }
                        `}
                      >
                        {
                          privacyStyles[privacy]
                            .label
                        }
                      </button>
                    );
                  })}

                </div>

                </div>
              </div>
            ))}

          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

          <h2 className="mb-4 text-2xl font-bold">
            Privacy Guide
          </h2>

          <div className="space-y-4 text-white/75">

            <div>
              <strong>Open</strong>
              <p>
                Visible on leaderboards and searchable.
              </p>
            </div>

            <div>
              <strong>Hidden</strong>
              <p>
                Searchable but excluded from leaderboards.
              </p>
            </div>

            <div>
              <strong>Anonymous</strong>
              <p>
                Appears on leaderboards and stats as Anonymous.
              </p>
            </div>

            <div>
              <strong>Private</strong>
              <p>
                Not searchable and excluded from global statistics.
              </p>
            </div>

          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-xl">

          <h2 className="text-2xl font-bold text-red-300">
  Danger Zone
</h2>

<p className="mt-3 text-white/60">
  Permanently delete your account and all
  linked player associations.
</p>

<button
  onClick={() =>
    setShowDeleteModal(true)
  }
  className="
    mt-4
    rounded-xl
    bg-red-500/20
    px-5
    py-3
    font-semibold
    text-red-300
    transition
    hover:bg-red-500/30
  "
>
  Delete Account
</button>

        </div>

      </section>
<DeleteAccountModal
  open={showDeleteModal}
  onClose={() =>
    setShowDeleteModal(false)
  }
  onDelete={deleteAccount}
/>     
    </main>
  );
}

function StatCard({
  title,
  value
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <p className="text-sm text-white/60">
        {title}
      </p>

      <p className="mt-2 text-3xl font-black">
        {value}
      </p>
    </div>
  );
}