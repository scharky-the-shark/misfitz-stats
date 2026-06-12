"use client";

import { useEffect, useState } from "react";

import styles from "./stats.module.css";
import { API_URL } from "@/lib/api";


export default function StatsPage() {

  const [playerId, setPlayerId] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [data, setData] = useState<any>(null);



  useEffect(() => {

    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };

  }, []);




  async function searchPlayer() {
    if (!playerId.trim()) {
      setError("Please enter a Player ID.");
      return;
    }
    /*
      Frontend cooldown [DELETED]
    */

    /*
      Auto-add Player:
    */
    const cleanedId = playerId.startsWith("Player:")
      ? playerId
      : `Player:${playerId}`;



    setLoading(true);

    setError("");

    setData(null);



    try {

    const response = await fetch(
  `${API_URL}/api/player/${cleanedId}`
  );



    let json;

    try {
      json = await response.json();
    } catch {
      json = {};
    }

    if (!response.ok) {

      if (response.status === 429) {
        throw new Error(
          json.error ||
          "Please wait before searching again."
        );
      }

      if (response.status === 404) {
        throw new Error(
          "Player ID not found."
        );
      }

      if (response.status >= 500) {
        throw new Error(
          "The stats server is currently unavailable."
        );
      }

      throw new Error(
        json.error ||
        "Failed to fetch stats."
      );
    }



const playerData = {
  ...json.data,
  playerId: json.data.playerId.replace("Player:", "")
};

setData(playerData);
    } catch (err: any) {

    if (
      err instanceof TypeError &&
      err.message.includes("fetch")
    ) {
      setError(
        "Unable to connect to the stats server."
      );
    } else {
      setError(
        err.message || "Something went wrong."
      );
    }

  }
  finally {

  setLoading(false);

}
}



  function rarityClass(rarity: string) {

    switch (rarity.toLowerCase()) {

      case "mythic":
        return "text-red-400 drop-shadow-[0_0_12px_rgba(248,113,113,0.9)]";

      case "legendary":
        return "text-yellow-300 drop-shadow-[0_0_12px_rgba(253,224,71,0.9)]";

      case "epic":
        return "text-purple-300 drop-shadow-[0_0_10px_rgba(216,180,254,0.7)]";

      case "rare":
        return "text-green-300 drop-shadow-[0_0_10px_rgba(216,180,254,0.7)]";

      case "common":
        return "text-gray-300 drop-shadow-[0_0_10px_rgba(216,180,254,0.7)]";

      default:
        return "text-white";

    }
  }



  return (
    <main className="relative min-h-fit bg-[#0b1220] text-white overflow-y-auto">

      <section className={styles.container}>

        <img
          src="/soon.jpg"
          alt="Stats"
          className={styles.background}
        />



        <div
          className={styles.overlay}
          style={{ pointerEvents: "none" }}
        />



        <div className={`${styles.content} flex w-full flex-col items-center`}>

          {/* TITLE */}
          <h1 className="text-5xl font-black tracking-[0.25em] text-white md:text-6xl">
            STATS
          </h1>



          <p className="mt-4 text-center text-white/70">
            Search for your Misfitz profile using your Player ID.
          </p>



          {/* GUIDE */}
          <div className="mt-6 w-full max-w-2xl rounded-3xl border border-[#00D9FF]/20 bg-[#00D9FF]/5 p-5 text-left backdrop-blur-xl">

            <h2 className="mb-3 text-lg font-bold text-[#00D9FF]">
              How To Find Your Player ID
            </h2>

            <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
              <p>1. Open Misfitz</p>
              <p>2. Open Settings</p>
              <p>3. Copy your Player ID</p>
              <p>4. Paste it below</p>
            </div>
          </div>



          {/* SEARCH */}
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">

            <input
              type="text"
              placeholder="Enter Player ID"
              value={playerId}
              onChange={(e) => setPlayerId(e.target.value)}
              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  searchPlayer();

                }

              }}
              className="w-full max-w-sm rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-center tracking-wider text-white outline-none backdrop-blur-md"
            />



            <button
              onClick={searchPlayer}
              disabled={loading || !playerId.trim()}
              className="rounded-2xl bg-white px-6 py-4 font-bold text-black transition hover:scale-105 disabled:opacity-50"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>



          {/* ERROR */}
          {error && (
            <div className="mt-6 w-full max-w-xl rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-center text-red-300">
              {error}
            </div>
          )}



          {/* RESULTS */}
          {data && (
            <div className="mt-12 grid w-full max-w-6xl gap-6 lg:grid-cols-3">

              {/* PROFILE */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">

                <h2 className="mb-4 text-2xl font-bold">Profile</h2>

                <div className="space-y-3 text-white/80">
                  <p><strong>Player ID:</strong> {data.playerId}</p>
                  <p><strong>Name:</strong> {data.playerName}</p>
                  <p><strong>Level:</strong> {data.playerLevel}</p>
                </div>
              </div>



              {/* STATS */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">

                <h2 className="mb-4 text-2xl font-bold">Stats</h2>

                <div className="space-y-3 text-white/80">
                  <p><strong>Games Played:</strong> {data.stats.gamesPlayed}</p>
                  <p><strong>Deaths:</strong> {data.stats.deaths}</p>
                  <p><strong>Extractions:</strong> {data.stats.extractions}</p>
                  <p><strong>Playtime:</strong> {data.stats.playtime}</p>
                  <p><strong>Relics Extracted:</strong> {data.stats.totalRelicsExtracted}</p>
                </div>
              </div>



              {/* GEAR */}
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">

                <h2 className="mb-4 text-2xl font-bold">Gear</h2>



                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    
                  </h3>

                  <div className="space-y-2 text-white/80">
                    {Object.entries(data.stats.gearByRarity).map(([key, value]) => (
                      <p
                        key={key}
                        className={rarityClass(key)}
                      >
                        <strong>{key}:</strong> {String(value)}
                      </p>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}