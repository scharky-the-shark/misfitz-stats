import { Misfit } from "../types";

export const MISFITS: Misfit[] = [
  {
    id: "ray",
    name: "Ray",
    class: "Chaos Engine",
    description: "bad, untamed, aggressive",

    hp: 7200,
    dmg: 1000,
    speed: 3,
    range: 8,

    attack: "4 pure energy blasts",
    ultimate: "Massive fire laser",

    image: "/misfitz/ray.png",

    accentColor: "#ff4545",
  },

  {
    id: "rush",
    name: "Rush",
    class: "Assasine",
    description: "fast skater and ninja",

    hp: 7500,
    dmg: 1050,

    speed: 4,
    range: 7,

    attack: "Throws ninja stars",
    ultimate: "Dashing trough enemies",

    image: "/misfitz/rush.png",

    accentColor: "#f59e0b",
  },

  {
    id: "beat",
    name: "Beat",
    class: "Tank",
    description: "sick beats",

    hp: 11000,
    dmg: 900,

    speed: 3,
    range: 6,

    attack: "Sick beats",
    ultimate: "boombox pulling enemies to a center point",

    image: "/misfitz/beat.png",

    accentColor: "#3b82f6",
  },

  {
    id: "gloss",
    name: "Gloss",
    class: "Healer",
    description: "perfect... idk.",

    hp: 6500,
    dmg: 0,

    speed: 3,
    range: 9,

    attack: "Shots heals mates and hurts enemies",
    ultimate: "Spawns a circle healing mates by 20% and dealing damage to enemies",

    image: "/misfitz/gloss.png",

    accentColor: "#ec4899",
  },

  {
    id: "shade",
    name: "Shade",
    class: "Sniper",
    description: "hot 7years old Misfit?!",

    hp: 7600,
    dmg: 2200,

    speed: 3,
    range: 11,

    attack: "Long range gumball",
    ultimate: "Sticky gumball prevent enemies to move",

    image: "/misfitz/shade.png",

    accentColor: "#a855f7",
  },

  {
    id: "drip",
    name: "Drip",
    class: "Tank",
    description: "From a bean to a machine.",

    hp: 10350,
    dmg: 50,

    speed: 3,
    range: 7,

    attack: "sprays graffiti on your face",
    ultimate: "acid syrup dealing long-time damage",

    image: "/misfitz/drip.png",

    accentColor: "#22c55e",
  },
];