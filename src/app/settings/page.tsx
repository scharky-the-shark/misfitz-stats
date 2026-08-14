// src/app/settings/page.tsx

"use client";

import Link from "next/link";
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
  anonymous:
    "Shown as Anonymous on leaderboards and not searchable.",
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

function displayPlayerId(playerId: string) {
  return playerId.startsWith("Player:")
    ? playerId.slice("Player:".length)
    : playerId;
}

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const [account, setAccount] =
    useState<AccountData | null>(null);

  const [savingPlayer, setSavingPlayer] =
    useState<string | null>(null);

  const [localMessage, setLocalMessage] =
    useState("");

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
console.log("[SETTINGS AUTH]", data);
      if (data.loggedIn) {
        setAccount(data.account);
      } else {
        setAccount(null);
      }
    } catch (error) {
      console.error(error);
      setAccount(null);
    } finally {
      setLoading(false);
    }
  }

  function clearRecentSearchCache() {
    try {
      localStorage.removeItem(
        "misfitz_recent_searches"
      );

      setLocalMessage(
        "Recently searched cache cleared."
      );
    } catch (error) {
      console.error(error);

      setLocalMessage(
        "Failed to clear recently searched cache."
      );
    }
  }

  function resetReportDisclaimer() {
    try {
      localStorage.removeItem(
        "report_disclaimer"
      );

      setLocalMessage(
        "Report disclaimer has been resetted."
      );
    } catch (error) {
      console.error(error);

      setLocalMessage(
        "Failed to reset report disclaimer."
      );
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
        throw new Error(
          "Failed to update privacy"
        );
      }

      setAccount((prev) => {
        if (!prev) return prev;

        return {
          ...prev,
          linkedAccounts:
            prev.linkedAccounts.map(
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

  const isLoggedIn = account !== null;

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

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.12),transparent_35%)]" />

      <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-[#7CFF00]/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#00D9FF]/10 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">

        {/* HEADER */}

        <h1 className="text-5xl font-black uppercase tracking-wider md:text-6xl">
          Settings
        </h1>

        <p className="mt-4 max-w-2xl text-white/70">
          Manage your Misfitz Statz account and
          local website settings.
        </p>

        {/* ACCOUNT SETTINGS */}

        {isLoggedIn ? (
          <>
            {/* ACCOUNT STATISTICS */}

            <div className="mt-10 grid gap-4 md:grid-cols-4">

              <StatCard
                title="Open"
                value={openCount}
              />

              <StatCard
                title="Hidden"
                value={hiddenCount}
              />

              <StatCard
                title="Anonymous"
                value={anonymousCount}
              />

              <StatCard
                title="Private"
                value={privateCount}
              />

            </div>

            {/* LINKED ACCOUNTS */}

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

                {linkedAccounts.map((linkedAccount) => (

                  <div
                    key={linkedAccount.playerId}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >

                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                      <div>

                        <p className="text-sm text-white/50">
                          Player ID
                        </p>

                        {linkedAccount.verified ? (

                          <Link
                            href={`/stats/#${encodeURIComponent(
                              displayPlayerId(
                                linkedAccount.playerId
                              )
                            )}`}
                            className="mt-1 block font-mono text-lg font-bold text-cyan-400 transition hover:text-cyan-300 hover:underline"
                          >
                            {displayPlayerId(
                              linkedAccount.playerId
                            )}
                          </Link>

                        ) : (

                          <p className="mt-1 font-mono text-lg font-bold">
                            {displayPlayerId(
                              linkedAccount.playerId
                            )}
                          </p>

                        )}

                        <p className="mt-1 text-sm text-white/60">
                          {
                            privacyDescriptions[
                              linkedAccount.privacy
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
                            linkedAccount.privacy ===
                            privacy;

                          return (

                            <button
                              key={privacy}
                              disabled={
                                savingPlayer ===
                                linkedAccount.playerId
                              }
                              onClick={() =>
                                updatePrivacy(
                                  linkedAccount.playerId,
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
                                    ? privacyStyles[
                                        privacy
                                      ].className
                                    : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
                                }
                              `}
                            >
                              {
                                privacyStyles[
                                  privacy
                                ].label
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

            {/* PRIVACY GUIDE */}

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
          </>
        ) : (

          /* NOT LOGGED IN */

          <div className="mt-10 rounded-3xl border border-red-500/30 bg-red-500/10 p-6 backdrop-blur-xl">

            <h2 className="text-2xl font-bold text-red-300">
              Account Settings Unavailable
            </h2>

            <p className="mt-3 text-red-200/80">
              You're not logged in. To see account
              settings please log in
            </p>

          </div>

        )}

        {/* LOCAL SETTINGS */}

        <div className="mt-8 rounded-3xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-xl">

          <h2 className="text-2xl font-bold text-red-300">
            Local Settings
          </h2>

          <p className="mt-3 text-white/60">
            These settings are stored locally in
            your browser and do not require an account.
          </p>

          <div className="mt-6 space-y-4">

            {/* RECENT SEARCH CACHE */}

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h3 className="font-bold text-white">
                    Clear recently Search Cache
                  </h3>

                  <p className="mt-1 text-sm text-white/50">
                    Removes all recently searched Player IDs
                    stored in this browser.
                  </p>
                </div>

                <button
                  onClick={clearRecentSearchCache}
                  className="rounded-xl bg-red-500/20 px-4 py-2 font-semibold text-red-300 transition hover:bg-red-500/30"
                >
                  Clear
                </button>

              </div>

            </div>

            {/* REPORT DISCLAIMER */}

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h3 className="font-bold text-white">
                    Reset report disclaimer
                  </h3>

                  <p className="mt-1 text-sm text-white/50">
                    Shows the report information again
                    the next time you open the report feature.
                  </p>
                </div>

                <button
                  onClick={resetReportDisclaimer}
                  className="rounded-xl bg-red-500/20 px-4 py-2 font-semibold text-red-300 transition hover:bg-red-500/30"
                >
                  Reset
                </button>

              </div>

            </div>

          </div>

          {localMessage && (
            <p className="mt-5 text-sm font-semibold text-lime-300">
              {localMessage}
            </p>
          )}

        </div>

        {/* DANGER ZONE */}

        <div className="mt-8 rounded-3xl border border-red-500/30 bg-red-500/5 p-6 backdrop-blur-xl">

          <h2 className="text-2xl font-bold text-red-300">
            Danger Zone
          </h2>

          <p className="mt-3 text-white/60">
            Permanently delete your Misfitz Statz
            account and all linked player associations.
          </p>

          <button
            disabled={!isLoggedIn}
            onClick={() => {
              if (!isLoggedIn) return;

              setShowDeleteModal(true);
            }}
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
              disabled:cursor-not-allowed
              disabled:bg-neutral-800
              disabled:text-neutral-500
            "
          >
            Delete Misfitz Statz Account
          </button>

          {!isLoggedIn && (
            <p className="mt-2 text-xs text-white/40">
              You must be logged in to delete your account.
            </p>
          )}

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