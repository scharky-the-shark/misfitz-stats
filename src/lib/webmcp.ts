import { initializeWebMCPPolyfill } from "@mcp-b/webmcp-polyfill";
import type { JsonSchemaForInference } from "@mcp-b/webmcp-types";

type LeaderboardCategory =
  | "relics_extracted"
  | "playtime"
  | "deaths";

interface LeaderboardEntry {
  rank: number;
  player_name: string;
  player_id: string;
  value: number;
  updated_at: number;
}

interface LeaderboardResponse {
  success: boolean;
  category: LeaderboardCategory;
  count: number;
  data: LeaderboardEntry[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const inputSchema = {
  type: "object",
  properties: {
    category: {
      type: "string",
      enum: ["relics_extracted", "playtime", "deaths"],
      description: "The leaderboard category to retrieve.",
    },
  },
  required: ["category"],
  additionalProperties: false,
} as const satisfies JsonSchemaForInference;

export function initializeMisfitzWebMCP() {
  if (typeof window === "undefined" || !API_URL) {
    return;
  }

  initializeWebMCPPolyfill();

  const modelContext = document.modelContext;

  if (!modelContext) {
    console.warn("WebMCP model context is not available.");
    return;
  }

  modelContext.registerTool({
    name: "get_leaderboard",

    description:
      "Get a public Misfitz Statz leaderboard. Available categories are relics_extracted, playtime, and deaths. Results are limited to the public top 25 and already respect the privacy settings enforced by the Misfitz Statz API.",

    inputSchema,

    execute: async ({ category }) => {
      const response = await fetch(
        `${API_URL}/api/leaderboard/${category}`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch leaderboard: ${response.status}`
        );
      }

      const data = (await response.json()) as LeaderboardResponse;

      return data;
    },
  });
}