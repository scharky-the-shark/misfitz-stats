"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

interface LeaderboardEntry {
  rank: number;
  player_name: string;
  player_id: string;
  value: number;
  updated_at: number;
}

interface LeaderboardResponse {
  success: boolean;
  category: string;
  count: number;
  data: LeaderboardEntry[];
}

export default function LeaderboardsPage() {
  const [leaderboard, setLeaderboard] =
    useState<LeaderboardResponse | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Platzhalter bis das Login-System angeschlossen wird
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] =
    useState<LeaderboardEntry | null>(null);

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/leaderboard/kills`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch leaderboard");
        }

        const data: LeaderboardResponse = await res.json();

        setLeaderboard(data);
      } catch (err) {
        console.error(err);
        setError("Could not load leaderboard.");
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, []);

  const lastUpdated = useMemo(() => {
    if (!leaderboard?.data.length) return null;
    return leaderboard.data[0].updated_at;
  }, [leaderboard]);

  function openReport(player: LeaderboardEntry) {
    setSelectedPlayer(player);
    setShowReportModal(true);
  }

  function closeReport() {
    setSelectedPlayer(null);
    setShowReportModal(false);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#08111f] flex items-center justify-center text-white">
        Loading leaderboard...
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#08111f] flex items-center justify-center text-red-400">
        {error}
      </main>
    );
  }

  if (!leaderboard) return null;

function formatValue(category: string, value: number) {
  switch (category) {
    case "playtime": {
      const hours = Math.floor(value / 3600);
      const minutes = Math.floor((value % 3600) / 60);
      const seconds = value % 60;

      if (hours > 0) {
        return `${hours}h ${minutes}m`;
      }

      if (minutes > 0) {
        return `${minutes}m ${seconds}s`;
      }

      return `${seconds}s`;
    }

    default:
      return value.toLocaleString();
  }
}

return (
  <>
    <main className="min-h-screen bg-[#08111f] text-white px-6 py-10">
<div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-2xl font-bold">
          Top killers
        </h2>

        <div className="mt-12 flex h-40 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02]">
          <div className="text-center">
            <h3 className="text-3xl font-black tracking-wider text-lime-400">
              This leaderboard is currently disabled.
            </h3>
          </div>
        </div>
      </div>
    </main>
  </>
);
}