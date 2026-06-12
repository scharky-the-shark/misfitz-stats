"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";

type ServiceStatus = "operational" | "degraded" | "outage";

interface StatusResponse {
  success: boolean;
  overall: ServiceStatus;
  lastUpdated: string;
  services: {
    middleware: {
      status: ServiceStatus;
    };
    discordBot: {
      status: ServiceStatus;
    };
    gameApi: {
      status: ServiceStatus;
    };
    playerTransfer: {
      status: ServiceStatus;
    };
  };
}

function getStatusIcon(status: ServiceStatus) {
  switch (status) {
    case "operational":
      return "🟢";
    case "degraded":
      return "🟡";
    case "outage":
      return "🔴";
  }
}

function getStatusText(status: ServiceStatus) {
  switch (status) {
    case "operational":
      return "Operational";
    case "degraded":
      return "Rerouted";
    case "outage":
      return "Outage";
  }
}

function StatusCard({
  title,
  status,
}: {
  title: string;
  status: ServiceStatus;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>

        <div className="flex items-center gap-2">
          <span>{getStatusIcon(status)}</span>
          <span className="text-sm text-zinc-400">
            {getStatusText(status)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function StatusPage() {
  const [data, setData] = useState<StatusResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [backendOffline, setBackendOffline] = useState(false);

  async function fetchStatus() {
    try {
      const response = await fetch(`${API_URL}/api/status`);

      const json = await response.json();

      setData(json);
      setBackendOffline(false);
    } catch (error) {
      console.error(error);
      setBackendOffline(true);
      setData({
        success: false,
        overall: "outage",
        lastUpdated: new Date().toISOString(),
        services: {
          middleware: {
            status: "outage",
          },
          discordBot: {
            status: "outage",
          },
          gameApi: {
            status: "outage",
          },
          playerTransfer: {
            status: "outage",
          },
        },
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStatus();

    const interval = setInterval(fetchStatus, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">System Status</h1>

        <p className="mt-4 text-zinc-400">
          Loading status...
        </p>
      </main>
    );
  }

if (!data) {
  return null;
}

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">
          System Status
        </h1>

        <p className="text-zinc-400">
          Live service availability and infrastructure
          status for Misfitz Stats.
        </p>
      </div>

      <div className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl">
            {getStatusIcon(data.overall)}
          </span>

          <h2 className="text-2xl font-bold">
            {data.overall === "operational" &&
              "All Systems Operational"}

            {data.overall === "degraded" &&
              "Partial Service Disruption"}

            {data.overall === "outage" &&
              "Major Service Outage"}
          </h2>
        </div>

        <p className="text-sm text-zinc-400">
          
          Last Updated:{" "}
          {new Date(data.lastUpdated).toLocaleString()}
        </p>
        {backendOffline && (
        <p className="mt-4 text-red-400">
          Unable to connect to the backend server.
          Displaying outage status.
        </p>
      )}
      </div>

      <div className="grid gap-4">
        <StatusCard
          title="Middleware API"
          status={data.services.middleware.status}
        />

        <StatusCard
          title="Discord Bot"
          status={data.services.discordBot.status}
        />

        <StatusCard
          title="Misfitz Game API"
          status={data.services.gameApi.status}
        />

        <StatusCard
          title="Player Transfer"
          status={data.services.playerTransfer.status}
        />
      </div>
    </main>
  );
}
