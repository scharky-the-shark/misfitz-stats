"use client";

import { useState } from "react";

export default function LocalSettings() {
  const [message, setMessage] = useState("");

  function clearRecentSearchCache() {
    try {
      localStorage.removeItem(
        "misfitz_recent_searches"
      );

      setMessage(
        "Recently searched cache cleared."
      );
    } catch (error) {
      console.error(error);

      setMessage(
        "Failed to clear recently searched cache."
      );
    }
  }

  function resetReportDisclaimer() {
    try {
      localStorage.removeItem(
        "report_disclaimer"
      );

      setMessage(
        "Report disclaimer reset."
      );
    } catch (error) {
      console.error(error);

      setMessage(
        "Failed to reset report disclaimer."
      );
    }
  }

  function resetLoginDisclaimer() {
    try {
      localStorage.removeItem(
        "login_disclaimer"
      );

      setMessage(
        "Login disclaimer reset."
      );
    } catch (error) {
      console.error(error);

      setMessage(
        "Failed to reset login disclaimer."
      );
    }
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
        Browser
      </p>

      <h2 className="mt-2 text-2xl font-bold">
        Local Settings
      </h2>

      <p className="mt-2 text-sm text-white/50">
        These settings are stored locally in
        your browser and do not require an account.
      </p>

      <div className="mt-6 space-y-4">
        <SettingAction
          title="Clear recently searched cache"
          description="Removes recently searched Player IDs stored in this browser."
          button="Clear"
          onClick={clearRecentSearchCache}
        />

        <SettingAction
          title="Reset report disclaimer"
          description="Shows the report information again the next time you open the report feature."
          button="Reset"
          onClick={resetReportDisclaimer}
        />

        <SettingAction
          title="Reset login disclaimer"
          description="Shows the Terms of Service and Privacy Policy confirmation again the next time you sign in."
          button="Reset"
          onClick={resetLoginDisclaimer}
        />
      </div>

      {message && (
        <p className="mt-5 text-sm font-semibold text-lime-300">
          {message}
        </p>
      )}
    </section>
  );
}

function SettingAction({
  title,
  description,
  button,
  onClick
}: {
  title: string;
  description: string;
  button: string;
  onClick: () => void;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-bold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-white/50">
            {description}
          </p>
        </div>

        <button
          type="button"
          onClick={onClick}
          className="rounded-xl bg-red-500/20 px-4 py-2 font-semibold text-red-300 transition hover:bg-red-500/30"
        >
          {button}
        </button>
      </div>
    </div>
  );
}