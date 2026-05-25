"use client";

import { useEffect } from "react";

import styles from "./stats.module.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function StatsPage() {

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);
  return (
    <main className="relative min-h-screen bg-[#0b1220] text-white select-none">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className={styles.container}>
        <img
          src="/soon.jpg"
          alt="Coming Soon"
          className={styles.background}
        />

        <div className={styles.overlay} />

        <div className={styles.content}>
          <h1 className={styles.title}>STATS</h1>

          <p className={styles.text}>
            Real-time statistics, leaderboards,
            match tracking and future API integrations.
            
          </p>
          <p className={styles.text}>
            All coming soon
          </p>
          <div className={styles.loader} />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}