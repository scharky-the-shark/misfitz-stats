"use client";

import { useEffect, useState } from "react";

import styles from "../stats.module.css";
import { API_URL } from "@/lib/api";


export default function StatsPage() {
  const [playerId, setPlayerId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<any>(null);
  const [showGuide, setShowGuide] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);


  function isValidPlayerId(id: string) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z0-9]{10,12}$/.test(id);
  }

  useEffect(() => {

    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };

  }, []);

useEffect(() => {
  try {
    const stored = localStorage.getItem("misfitz_recent_searches");

    if (!stored) {
      return;
    }

    const parsed = JSON.parse(stored);

    if (Array.isArray(parsed)) {
      setRecentSearches(
        parsed
          .filter(
            (id): id is string =>
              typeof id === "string" && isValidPlayerId(id)
          )
          .slice(0, 4)
      );
    }
  } catch {
    localStorage.removeItem("misfitz_recent_searches");
  }
}, []);

useEffect(() => {

  const handleHashChange = () => {

    const hash = window.location.hash.replace("#", "");

    if (!hash) {
      setPlayerId("");
      setData(null);
      setError("");
      return;
    }

    setPlayerId(hash);
    setError("");

    if (!isValidPlayerId(hash)) {
      setData(null);
      setError("Invalid request.");
      return;
    }

    searchPlayer(hash, true);

  };

  handleHashChange();

  window.addEventListener("hashchange", handleHashChange);

  return () => {
    window.removeEventListener("hashchange", handleHashChange);
  };

}, []);

function addRecentSearch(id: string) {
  try {
    const normalizedId = id.trim();

    if (!isValidPlayerId(normalizedId)) {
      return;
    }

    const stored = localStorage.getItem(
      "misfitz_recent_searches"
    );

    let recent: string[] = [];

    if (stored) {
      const parsed = JSON.parse(stored);

      if (Array.isArray(parsed)) {
        recent = parsed.filter(
          (recentId): recentId is string =>
            typeof recentId === "string" &&
            isValidPlayerId(recentId)
        );
      }
    }

    const updated = [
      normalizedId,
      ...recent.filter(
        (recentId) => recentId !== normalizedId
      )
    ].slice(0, 4);

    localStorage.setItem(
      "misfitz_recent_searches",
      JSON.stringify(updated)
    );

    setRecentSearches(updated);

  } catch {
    // Ignore localStorage errors.
  }
}

async function searchPlayer(searchId?: string, silent = false){
const input = typeof searchId === "string" ? searchId.trim() : playerId.trim();
  
    if (!isValidPlayerId(input)) {
      setError("Invalid request.");
      return;
    }

    if (!input) {
      setError("Please enter a Player ID.");
      return;
    }

    const cleanedId = input.startsWith("Player:")
      ? input
      : `Player:${input}`;

    setLoading(true);
    setError("");

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
addRecentSearch(playerData.playerId);

window.history.replaceState(
  null,
  "",
  `${window.location.pathname}#${playerData.playerId}`
);

   } catch (err: any) {

  if (!silent) {

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
      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="flex w-full flex-col items-center">
          
          {/* TITLE */}
          <h1 className="text-4xl font-black tracking-[0.18em] text-white">
            PLAYER STATS
          </h1>

          <p className="mt-3 text-center text-white/60">
            Search any public Misfitz profile by Player ID.
          </p>

          {/* SEARCH */}
          <div className="mt-8 flex w-full max-w-xl items-center justify-center gap-4">

            <button
              onClick={() => setShowGuide(!showGuide)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-xl text-white transition hover:bg-white/10"
              title="How to find your Player ID"
            >
              ?
            </button>
            
            <input
              type="text"
              placeholder="Player ID"
              value={playerId}
              onChange={(e) => setPlayerId(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchPlayer();
                }
              }}
              className="flex-1 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-center tracking-wider text-white outline-none backdrop-blur-md"
            />

            <button
              onClick={() => searchPlayer()}
              disabled={loading ||  !isValidPlayerId(playerId.trim())}
              className="rounded-2xl bg-lime-400 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-lime-300 disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-neutral-400"
            >
              {loading ? "Searching..." : "Search"}
            </button>



          </div>

          {recentSearches.length > 0 && (
            <div className="mt-6 w-full max-w-xl">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
                Recently Searched
              </h2>

              <div className="grid grid-cols-3 gap-3">
                {recentSearches.slice(0, 3).map((id) => (
                  <button
                    key={id}
                    onClick={() => {
                      setPlayerId(id);
                      searchPlayer(id);
                    }}
                    className="rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-sm font-semibold tracking-wide text-white/80 transition hover:border-lime-400/40 hover:bg-white/10 hover:text-white"
                  >
                    {id}
                  </button>
                ))}
              </div>
            </div>
          )}

          {showGuide && (
            <div className="mt-6 w-full max-w-xl rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">

              <h2 className="mb-4 text-lg font-bold text-cyan-300">
                How To Find Your Player ID
              </h2>

              <div className="space-y-2 text-white/70">
                <p>1. Open Misfitz</p>
                <p>2. Open Settings</p>
                <p>3. Copy your Player ID</p>
                <p>4. Paste it above</p>
              </div>

            </div>
          )}

        {/* ERROR */}
          {error && (
            <div className="mt-6 w-full max-w-xl rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-center text-red-300">
              {error}
            </div>
          )}

        {/* RESULTS */}
          {data && (
            <div className="mt-12 grid w-full max-w-7xl grid-cols-12 gap-6">
              {/* PROFILE */}
              <div className="col-span-4 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">

                <h2 className="mb-6 text-2xl font-bold">Profile</h2>

                <div className="space-y-4">

                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Player ID</span>
                    <span className="font-semibold text-white tracking-wide">
                      {data.playerId}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Name</span>
                    <span className="font-semibold text-white">
                      {data.playerName}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Level</span>
                    <span className="font-semibold text-white">
                      {data.playerLevel}
                    </span>
                  </div>

                  <div className="pt-2" />

                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Heroes Unlocked</span>
                    <span className="font-semibold text-white">
                      {data.heroes.filter((hero: any) => hero.unlocked).length} / {data.heroes.length}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Relics Extracted</span>
                    <span className="font-semibold text-white">
                      {data.stats.totalRelicsExtracted}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Collection</span>
                    <span className="font-semibold text-white">
                      {data.relics.seasons.reduce(
                        (sum: number, season: any) => sum + season.uniqueCollected,
                        0
                      )}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Playtime</span>
                    <span className="font-semibold text-white">
                      {Math.floor(data.stats.playtime / 3600)}h {Math.floor((data.stats.playtime % 3600) / 60)}m
                    </span>
                  </div>
                </div>

              </div>

              {/* STATS */}
              <div className="col-span-4 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">

                <h2 className="mb-6 text-2xl font-bold">Stats</h2>

                <div className="space-y-4">

                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Games Started</span>
                    <span className="font-semibold text-white">
                      {data.stats.gamesStarted}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Games Played</span>
                    <span className="font-semibold text-white">
                      {data.stats.gamesPlayed}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Deaths</span>
                    <span className="font-semibold text-white">
                      {data.stats.deaths}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Extractions</span>
                    <span className="font-semibold text-white">
                      {data.stats.extractions}
                    </span>
                  </div>
                </div>

                <div className="my-8 border-white/10" />

                <h2 className="mb-6 text-2xl font-bold">Gear</h2>

                <div className="space-y-3">

                  {[ "Common", "Rare", "Epic", "Legendary", "Mythic"].map((rarity) => (
                    <div
                      key={rarity}
                      className="flex items-center justify-between"
                    >
                      <span className={rarityClass(rarity)}>
                        {rarity}
                      </span>

                      <span className="font-semibold text-white">
                        {data.stats.gearByRarity[rarity] ?? 0}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

              {/* RELICS */}
              <div className="col-span-4 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">

                <h2 className="mb-6 text-2xl font-bold">Relics</h2>

                <div className="space-y-4">

                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Total Relics</span>
                    <span className="font-semibold text-white">
                      {data.relics.totalCollected}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-white/10 pb-4">
                    <span className="text-white/60">Total Unique</span>
                    <span className="font-semibold text-white">
                      {data.relics.seasons.reduce(
                        (sum: number, season: any) => sum + season.uniqueCollected,
                        0
                      )}
                    </span>
                  </div>

                  {data.relics.seasons.map((season: any) => (
                    <div
                      key={season.seasonId}
                      className="border-t border-white/10 pt-4"
                    >

                      <h3 className="mb-3 font-semibold text-white">
                        {season.seasonId.replace("_", " ")}
                      </h3>

                      <div className="space-y-3">

                        <div className="flex items-center justify-between">
                          <span className="text-white/60">
                            Unique
                          </span>

                          <span className="font-semibold text-white">
                            {season.uniqueCollected} / 75
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-white/60">
                            Collected
                          </span>

                          <span className="font-semibold text-white">
                            {season.totalCollected}
                          </span>
                        </div>

                      </div>

                    </div>
                  ))}

                </div>

              </div>
              
            {/* ACHIEVEMENTS */}
            <div className="col-span-12 rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-md">

              <h2 className="mb-3 text-2xl font-bold">
                Achievements
              </h2>

              <div className="mt-12 flex h-56 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02]">
                <div className="text-center">
                  <h3 className="text-3xl font-black tracking-wider text-lime-400">
                    COMING SOON
                  </h3>
                  <p className="mt-3 max-w-lg text-white/75">
                    This feature is currently in development and will be available in a future update.
                  </p>
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