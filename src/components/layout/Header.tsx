"use client";

import { useEffect, useState } from "react";
import LoginModal from "../LoginModal";
import { API_URL } from "@/lib/api";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  // SPAETER ÄENDERN
  useEffect(() => {
  fetch(`${API_URL}/auth/me`, {
    credentials: "include"
  })
    .then((res) => res.json())
    .then((data) => {
      setLoggedIn(data.loggedIn);
    })
    .catch(() => {
      setLoggedIn(false);
    });
}, []);

const handleLogout = async () => {
  await fetch(
    `${API_URL}/auth/logout`,
    {
      credentials: "include"
    }
  );

  setLoggedIn(false);
  setMenuOpen(false);
};

return (
  <>
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">      
    <div className="relative flex w-full items-center px-6 py-3 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Misfitz Logo"
            className="h-12 w-auto drop-shadow-[0_0_18px_rgba(124,255,0,0.45)]"
          />

          <div>
            <p className="text-xl font-black tracking-widest text-[#7CFF00]">
              STATS TRACKER
            </p>

            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Community Hub
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          <div className="group relative">
            <button className="transition hover:text-[#7CFF00]">
              Game + Lore
            </button>

            <div className="absolute top-full pt-3 hidden min-w-[220px] rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl group-hover:block">
              <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                Characters
              </a>

              <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                Relics
              </a>

              <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                Map
              </a>
            </div>
          </div>

          <div className="group relative">
            <button className="transition hover:text-[#00D9FF]">
              Tutorial
            </button>

            <div className="absolute top-full pt-3 hidden min-w-[240px] rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl group-hover:block">
              <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                How to Install
              </a>

              <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                Learn the Game
              </a>

              <a className="block rounded-xl px-3 py-2 hover:bg-white/5">
                Become a Pro
              </a>
            </div>
          </div>
          <a
            href="/version"
            className="transition hover:text-[#7CFF00]"
          >
            Version
          </a>
          <div className="group relative">
            <button className="transition hover:text-[#00D9FF]">
              Leaderboards
            </button>

            <div className="absolute top-full pt-3 hidden min-w-[260px] rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl group-hover:block">
              <a 
              className="block rounded-xl px-3 py-2 hover:bg-white/5"
              href="/collector"
              >
                Top Relic Collectors
              </a>

              <a 
              className="block rounded-xl px-3 py-2 hover:bg-white/5"
              href="/killers"
              >
                Top Killers
              </a>

              <a 
              className="block rounded-xl px-3 py-2 hover:bg-white/5"
              href="/deadly"
              >
                Most deadly players
              </a>

              <a 
              className="block rounded-xl px-3 py-2 hover:bg-white/5"
              href="/playtime"
              >
                Highest playtime
              </a>
            </div>
          </div>
          <a
            href="/stats"
            className="transition hover:text-[#7CFF00]"
          >
            Stats
          </a>
        </nav>
        {/* Account Area */}
      <div className="relative ml-auto">
            {!loggedIn ? (
        <button
          onClick={() => {
            setShowLoginModal(true);
          }}
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 transition hover:bg-white/10"
        >
          Sign In
        </button> 
          ) : (
            <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 transition hover:bg-white/10"
      >
        Account
      </button>

      {menuOpen && (
        <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-[#111827]/95 p-2 shadow-2xl backdrop-blur-xl">

          <a
            href="/settings"
            className="block rounded-xl px-3 py-2 hover:bg-white/5"
          >
            Settings
          </a>

          <a
            href="/verification"
            className="block rounded-xl px-3 py-2 hover:bg-white/5"
          >
            Verification
          </a>

          <button
            onClick={handleLogout}
            className="mt-2 w-full rounded-xl px-3 py-2 text-left text-red-400 hover:bg-red-500/10"
          >
            Logout
          </button>
        </div>
      )}
    </>
  )}
  </div>
</div>
</header>
<LoginModal
  isOpen={showLoginModal}
  onClose={() => setShowLoginModal(false)}
/>

</>
);
}