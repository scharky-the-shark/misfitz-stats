"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { MISFITS } from "./data/misfits";
import StatBar from "./components/StatBar";

export default function MisfitsPage() {
  const [selected, setSelected] = useState(MISFITS[0]);

  return (
<main className="relative min-h-fit overflow-hidden text-white">

  <div
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/zeros_home.png')",
      filter: "blur(6px)",
      transform: "scale(1.05)",
    }}
  />

  <div className="absolute inset-0 z-10 bg-black/80" />

  <div className="relative z-20 mx-auto max-w-7xl px-6 py-12">



        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">

            <AnimatePresence mode="wait">

              <motion.div
                key={selected.id}
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 50,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="relative h-[500px] w-[500px]"
              >
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

            </AnimatePresence>

          </div>

          <AnimatePresence mode="wait">

            <motion.div
              key={selected.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="space-y-6"
            >
              <div>
                <p className="uppercase text-lime-400 tracking-widest text-sm">
                  {selected.class}
                </p>

                <h2 className="text-5xl font-black mt-2">
                  {selected.name}
                </h2>
              </div>

              <p className="text-neutral-300 leading-relaxed">
                {selected.description}
              </p>

              <div className="space-y-4">
                <StatBar
                    label="HP"
                    value={selected.hp}
                    maxValue={12000}
                />

                <StatBar
                    label="Speed"
                    value={selected.speed}
                    maxValue={5}
                    suffix=" m/s"
                />

                <StatBar
                    label="Range"
                    value={selected.range}
                    maxValue={11}
                    suffix=" m"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <div className="border border-neutral-800 rounded-xl p-4 bg-neutral-950">
                  <p className="text-xs uppercase text-neutral-500 mb-2">
                    Attack
                  </p>

                  <p>{selected.attack}</p>
                </div>

                <div className="border border-neutral-800 rounded-xl p-4 bg-neutral-950">
                  <p className="text-xs uppercase text-neutral-500 mb-2">
                    Ultimate
                  </p>

                  <p>{selected.ultimate}</p>
                </div>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

        <div className="mt-16 flex justify-center flex-wrap gap-4">

          {MISFITS.map((misfit) => (
            <button
              key={misfit.id}
              onClick={() => setSelected(misfit)}
              className={`
                relative
                h-28
                w-24
                rounded-xl
                border
                bg-neutral-950
                transition-all
                hover:scale-105
                ${
                  selected.id === misfit.id
                    ? "border-lime-400"
                    : "border-neutral-800"
                }
              `}
            >
              <Image
                src={misfit.image}
                alt={misfit.name}
                fill
                className="object-contain p-2"
              />

              <div className="absolute bottom-1 left-0 right-0 text-center text-xs font-semibold">
                {misfit.name}
              </div>
            </button>
          ))}

        </div>

      </div>
    </main>
  );
}