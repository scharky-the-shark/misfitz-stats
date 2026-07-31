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
    if (
  process.env.NODE_ENV === "development" &&
  new URLSearchParams(window.location.search).get("devLogin") === "1")
  {
  setAccount({
    discordId: "123456789012345678",
    linkedAccounts: [
      {
        playerId: "Player:ABC123",
        privacy: "public",
        verified: true,
      },
      {
        playerId: "Player:XYZ987",
        privacy: "private",
        verified: false,
      },
    ],
  });

  setLoading(false);
  return;
}

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
          Enter codes
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
          Enter codes and earn badges
        </h1>

        <p className="mt-6 text-red-400">
          You must be logged in.
        </p>
      </main>
    );
  }

  return (

    <main className="mx-auto max-w-4xl p-8">
  {/* Headline */}
  <h1 className="text-5xl font-black uppercase leading-none md:text-5xl">
  Earn {" "}{" "}
    <span className="bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
      badges
    </span>{" "}
  <span className="block">
    <span className="bg-gradient-to-r from-[#7CFF00] to-[#00D9FF] bg-clip-text text-transparent">
      from
    </span>{" "}
    <span className="bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#C9A227] bg-clip-text text-transparent">
      everywhere
    </span>
  </span>
  </h1>
<div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-2xl font-bold">
          Enter a code to redeem a badge
        </h2>

        <div className="mt-12 flex h-40 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02]">
          <div className="text-center">
            <h3 className="text-3xl font-black tracking-wider text-lime-400">
              Coming soon
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}