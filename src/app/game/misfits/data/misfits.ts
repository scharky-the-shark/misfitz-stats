import { Misfit } from "../types";

export const MISFITS: Misfit[] = [
  {
    id: "ray",
    name: "Ray",
    class: "Chaos Engine",
    description: "bad, untamed, aggressive",

    status: "released",

    stats: {
      hp: 7200,
      damage: 1000,
      speed: 3,
      range: 8,
    },

    abilities: {
      attack: "4 pure energy blasts",
      ultimate: "Massive fire laser",
    },

    image: "/misfitz/ray.png",

    accentColor: "#ff4545",
  },

  {
    id: "rush",
    name: "Rush",
    class: "Assasine",
    description: "fast skater and ninja",

    status: "released",

    stats: {
      hp: 7500,
      damage: 1050,
      speed: 4,
      range: 7,
    },

    abilities: {
      attack: "Throws ninja stars",
      ultimate: "Dashing trough enemies",
    },

    image: "/misfitz/rush.png",

    accentColor: "#f59e0b",
  },

  {
    id: "beat",
    name: "Beat",
    class: "Tank",
    description: "sick beats",

    status: "released",

    stats: {
      hp: 11000,
      damage: 900,
      speed: 3,
      range: 6,
    },

    abilities: {
      attack: "Sick beats",
      ultimate: "boombox pulling enemies to a center point",
    },

    image: "/misfitz/beat.png",

    accentColor: "#3b82f6",
  },

  {
    id: "gloss",
    name: "Gloss",
    class: "Healer",
    description: "perfect... idk.",

    status: "released",

    stats: {
      hp: 6500,
      damage: 0,
      speed: 3,
      range: 9,
    },

    abilities: {
      attack: "Shots heals mates and hurts enemies",
      ultimate: "Spawns a circle healing mates by 20% and dealing damage to enemies",
    },

    image: "/misfitz/gloss.png",

    accentColor: "#ec4899",
  },

  {
    id: "shade",
    name: "Shade",
    class: "Sniper",
    description: "hot 7years old Misfit?!",

    status: "released",

    stats: {
      hp: 7600,
      damage: 2200,
      speed: 3,
      range: 11,
    },

    abilities: {
      attack: "Long range gumball",
      ultimate: "Sticky gumball prevent enemies to move",
    },

    image: "/misfitz/shade.png",

    accentColor: "#a855f7",
  },

  {
    id: "drip",
    name: "Drip",
    class: "Tank",
    description: "From a bean to a machine.",

    status: "released",

    stats: {
      hp: 10350,
      damage: 50,
      speed: 3,
      range: 7,
    },

    abilities: {
      attack: "sprays graffiti on your face",
      ultimate: "acid syrup dealing long-time damage",
    },

    image: "/misfitz/drip.png",

    accentColor: "#22c55e",
  },
  {
    id: "fang",
    name: "Locked",
    class: "Soon",
    description: "From a bean to a machine.",

    status: "teaser",
    
    stats: {
      hp: 0,
      damage: 0,
      speed: 0,
      range: 0,
    },

    abilities: {
      attack: "sprays graffiti on your face",
      ultimate: "acid syrup dealing long-time damage",
    },

    image: "/misfitz/drip.png",

    accentColor: "#22c55e",
  },
];