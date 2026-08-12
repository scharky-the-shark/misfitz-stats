"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ReportModal from "@/components/reports/ReportModal";

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
          `${process.env.NEXT_PUBLIC_API_URL}/api/leaderboard/playtime`
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
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-center text-4xl font-bold">
          Most Playtime
        </h1>

        <div className="overflow-x-auto hide-scrollbar">
          <div className="min-w-[760px] space-y-4">
              {leaderboard.data.map((player) => {
              const id = player.player_id.replace("Player:", "");
              let border =
                "border border-slate-700 bg-slate-900";

              if (player.rank === 1) {
                border =
                  "border-2 border-yellow-400 bg-yellow-500/10";
              } else if (player.rank === 2) {
                border =
                  "border-2 border-gray-300 bg-gray-300/10";
              } else if (player.rank === 3) {
                border =
                  "border-2 border-orange-400 bg-orange-500/10";
              }

              return (
                <div
                  key={player.player_id}
                  className={`rounded-xl p-5 ${border}`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex gap-5">
                      <div className="w-14 text-center">
                        <div className="text-3xl font-bold">
                          {player.rank === 1
                            ? "1"
                            : player.rank === 2
                            ? "2"
                            : player.rank === 3
                            ? "3"
                            : `#${player.rank}`}
                        </div>
                      </div>
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/stats/#${id}`}
                        className="text-xl font-semibold hover:text-lime-400 transition"
                      >
                        {player.player_name}
                      </Link>
                      <span className="text-sm text-slate-500">
                        {id}
                      </span>
                    </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold min-w-[70px] text-right">
                        {formatValue(leaderboard.category, player.value)}
                      </div>
                      <button
                        onClick={() => openReport(player)}
                        className="rounded-xl border border-white/15 bg-[#a63126] px-4 py-2 text-sm font-semibold backdrop-blur-xl transition hover:border-[#c93224] hover:bg-[#e31907]"
                      >
                        ! 
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {lastUpdated && (
          <div className="mt-10 text-center text-sm text-slate-400">
            Last updated{" "}
            {new Date(lastUpdated).toLocaleString()}
          </div>
        )}
      </div>
    </main>

    {showReportModal && selectedPlayer && (
      <ReportModal
        open={showReportModal}
        playerId={selectedPlayer.player_id.replace("Player:", "")}
        playerName={selectedPlayer.player_name}
        onClose={closeReport}
      />
    )}
  </>
);
}