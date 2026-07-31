export interface Misfit {
  id: string;
  name: string;
  class: string;
  description: string;

  status?: "released" | "teaser";

  stats: {
    hp: number;
    damage: number;
    speed: number;
    range: number;
  };

  abilities: {
    attack: string;
    ultimate: string;
  };

  image: string;

  accentColor?: string;
}