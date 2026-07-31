"use client";

import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { Lock } from "lucide-react";

import { MISFITS } from "../data/misfits";
import StatBar from "../components/StatBar";
import { useState } from "react";

interface DesktopProps {
  selected: (typeof MISFITS)[number];
  setSelected: React.Dispatch<
    React.SetStateAction<(typeof MISFITS)[number]>
  >;
}

export default function Desktop({
  selected,
  setSelected,
}: DesktopProps) {
    const [selectorOpen, setSelectorOpen] = useState(false);
  return (
<div className="mx-auto max-w-7xl px-6 py-10">
  <div className="space-y-10">
    {/* Character Selector */}
<section>

  <button
    onClick={() => setSelectorOpen(!selectorOpen)}
    className="flex w-full items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/40 px-5 py-4 transition hover:border-lime-400"
  >
    <span className="text-lg font-bold">
      Characters
    </span>

    <span className="text-2xl leading-none">
      {selectorOpen ? "−" : "+"}
    </span>
  </button>

  {selectorOpen && (
    <div className="mt-5 flex flex-wrap justify-center gap-4">
      {MISFITS.map((misfit) => (
        <button
          key={misfit.id}
          onClick={() => setSelected(misfit)}
          className={`
            relative
            h-24
            w-20
            overflow-hidden
            rounded-xl
            border
            bg-neutral-900
            transition-all
            duration-200
            hover:scale-105
            ${
              selected.id === misfit.id
                ? "border-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.35)]"
                : "border-neutral-800"
            }
          `}
        >

        {misfit.status === "teaser" ? (

          <div className="absolute inset-0 flex items-center justify-center">

            <Lock
              className="h-10 w-10 text-lime-400"
              strokeWidth={2.2}
            />

          </div>

        ) : (

          <Image
            src={misfit.image}
            alt={misfit.name}
            fill
            className="object-contain p-2"
          />

        )}

        <div className="absolute bottom-1 left-0 right-0 text-center text-xs font-semibold">
          {misfit.status === "teaser" ? " " : misfit.name}
        </div>
        </button>
      ))}
    </div>
  )}

  <div className="mt-14 border-t border-neutral-800 pt-8"></div>

</section>

    {/* SECTION 1 */}
    <AnimatePresence mode="wait">
<div className="flex flex-col">

  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-lime-400">
    {selected.status === "teaser" ? "Coming Soon" : selected.class}
  </p>

  <h1 className="mt-2 text-3xl font-black tracking-tight">
    {selected.status === "teaser" ? "Coming Soon" : selected.name}
  </h1>

  <p className="mt-4 text-base leading-relaxed text-neutral-300">
    {selected.status === "teaser"
      ? "This Misfit hasn't been revealed yet."
      : selected.description}
  </p>

  <section className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4">

    <h2 className="mb-4 text-xl font-bold">
      General Stats
    </h2>

    <div className="space-y-4">

      <StatBar
        label="HP"
        value={selected.stats.hp}
        maxValue={12000}
      />

      <StatBar
        label="Damage"
        value={selected.stats.damage}
        maxValue={2500}
      />

      <StatBar
        label="Speed"
        value={selected.stats.speed}
        maxValue={5}
        suffix=" m/s"
      />

      <StatBar
        label="Range"
        value={selected.stats.range}
        maxValue={11}
        suffix=" m"
      />

    </div>

  </section>

  <Link
    href="/meta"
    className="mt-6 w-full rounded-xl border border-lime-400 py-3 text-center text-sm font-semibold text-lime-400 transition-all duration-200 hover:bg-lime-400 hover:text-black"
  >
    View Meta Data
  </Link>

</div>
    </AnimatePresence>

    {/* SECTION 2 */}
    <div className="grid gap-8 xl:grid-cols-2">
      {/* Patch History */}
      <section className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6">
        <h2 className="mb-6 text-2xl font-bold">
          Patch History
        </h2>

        <div className="rounded-2xl border border-dashed border-neutral-700 bg-neutral-950/60 p-8 text-center">
          <p className="text-lg font-semibold text-neutral-300">
            Coming Soon
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            Balance changes and version history will appear here.
          </p>
        </div>
      </section>

      {/* Abilities */}
      <section className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6">
        <h2 className="mb-8 text-2xl font-bold">
          Abilities
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-2 text-lg font-bold text-lime-400">
              Attack
            </h3>

            <p className="leading-relaxed text-neutral-300">
            {selected.status === "teaser" ? "Coming Soon"  : selected.abilities.attack}
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-lime-400">
              Ultimate
            </h3>
            <p className="leading-relaxed text-neutral-300">
            {selected.status === "teaser" ? "Coming Soon"  : selected.abilities.ultimate}
            </p>
          </div>
        </div>
      </section>
    </div>

  </div>
</div>
)}