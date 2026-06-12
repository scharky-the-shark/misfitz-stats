"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";

export default function VerificationPage() {

  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState<any>(null);
  const [playerId, setPlayerId] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  
  useEffect(() => {
    fetch(
      `${API_URL}/auth/me`,
      {
        credentials: "include"
      }
    )
      .then((res) => res.json())
      .then((data) => {

        if (data.loggedIn) {
          setAccount(data.account);
        }

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

  }, []);

  async function removePlayer(playerId: string) {

    await fetch(
      `${API_URL}/auth/player/${playerId}`,
      {
        method: "DELETE",
        credentials: "include"
      }
    );

    const response = await fetch(
      `${API_URL}/auth/me`,
      {
        credentials: "include"
      }
    );

    const data = await response.json();

    if (data.loggedIn) {
      setAccount(data.account);
    }
  }

    async function searchPlayer() {

  if (!playerId.trim()) {
    return;
  }

    const cleanedId =
      playerId.startsWith("Player:")
        ? playerId
        : `Player:${playerId}`;

    setSearchLoading(true);
    setSearchError("");
    setSearchResult(null);

    try {

      const response =
        await fetch(
          `${API_URL}/api/player/${cleanedId}`
        );

      const json =
        await response.json();

      if (!response.ok) {
        throw new Error(
          json.error ||
          "Player not found."
        );
      }

      setSearchResult(json.data);

    } catch (err: any) {

      setSearchError(
        err.message ||
        "Failed to search."
      );

    } finally {

      setSearchLoading(false);

    }
  }

  if (loading) {
    return (
      <main className="mx-auto max-w-4xl p-8">
        <h1 className="text-4xl font-bold">
          Verification
        </h1>

        <p className="mt-6 text-white/70">
          Loading...
        </p>
      </main>
    );
  }

  if (!account) {
    return (
      <main className="mx-auto max-w-4xl p-8">
        <h1 className="text-4xl font-bold">
          Verification
        </h1>

        <p className="mt-6 text-red-400">
          You must be logged in.
        </p>
      </main>
    );
  }

  return (

    <main className="mx-auto max-w-4xl p-8">

<div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">

  <h2 className="text-2xl font-semibold">
    Discord Account
  </h2>

  <p className="mt-4">
    Discord ID:
    <span className="ml-2 font-semibold">
      {account.discordId}
    </span>
  </p>

</div>

<div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">

  <h2 className="text-2xl font-semibold">
    Linked Accounts
  </h2>

  {account.linkedAccounts.length === 0 ? (

    <p className="mt-4 text-white/60">
      No linked accounts.
    </p>

  ) : (

    <div className="mt-6 space-y-4">

      {account.linkedAccounts.map(
        (linked: any) => (

          <div
            key={linked.playerId}
            className="rounded-2xl border border-white/10 p-4"
          >

            <p>
              <strong>PlayerID:</strong>{" "}
              {linked.playerId}
            </p>

            <p>
              <strong>Privacy:</strong>{" "}
              {linked.privacy}
            </p>

            <p>
              <strong>Verification:</strong>{" "}
              {linked.verified
                ? "Verified"
                : "Not Verified"}
            </p>

            <button
              onClick={() =>
                removePlayer(
                  linked.playerId
                )
              }
              className="mt-4 rounded-xl bg-red-500 px-4 py-2 text-white"
            >
              Remove
            </button>

          </div>

        )
      )}

    </div>

  )}

</div>
<div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">

  <h2 className="text-2xl font-semibold">
    Add Player ID
  </h2>

  <div className="mt-6 flex gap-4">

    <input
      type="text"
      value={playerId}
      onChange={(e) =>
        setPlayerId(e.target.value)
      }
      placeholder="Player ID"
      className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3"
    />

    <button
      onClick={searchPlayer}
      disabled={searchLoading}
      className="rounded-xl bg-white px-5 py-3 text-black"
    >
      {searchLoading
        ? "Searching..."
        : "Search"}
    </button>

  </div>

  {searchError && (
    <p className="mt-4 text-red-400">
      {searchError}
    </p>
  )}

  {searchResult && (

    <div className="mt-6 rounded-2xl border border-white/10 p-4">

      <p>
        <strong>Name:</strong>{" "}
        {searchResult.playerName}
      </p>

      <p>
        <strong>Player ID:</strong>{" "}
        {searchResult.playerId}
      </p>

      <button
        disabled
        className="mt-4 rounded-xl bg-yellow-500 px-4 py-2 text-black"
      >
        Verification Coming Soon
      </button>

    </div>

  )}

</div>
    </main>
  );
}