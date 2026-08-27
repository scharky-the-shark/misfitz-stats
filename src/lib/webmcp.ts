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

const playerInputSchema = {
  type: "object",
  properties: {
    player_id: {
      type: "string",
      description:
        "The Misfitz player ID. Use the player_id returned by get_leaderboard when searching by player name or use the ID that a user has sent.",
    },
  },
  required: ["player_id"],
  additionalProperties: false,
} as const satisfies JsonSchemaForInference;

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

modelContext.registerTool({
  name: "get_player",

  description:  "Get public Misfitz player stats using a Misfitz player ID. If the user provides a player name instead of an ID, first use get_leaderboard to find the matching player_name and obtain its player_id, then use that player_id with this tool. If the user provides a player ID directly, use it without calling get_leaderboard first. Do not use Discord IDs. Privacy is enforced by the Misfitz Statz API.",

  inputSchema: playerInputSchema,

  execute: async ({ player_id }) => {
    const response = await fetch(
      `${API_URL}/api/player/Player:${encodeURIComponent(player_id)}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch player stats: ${response.status}`
      );
    }

    return await response.json();
  },
});
}