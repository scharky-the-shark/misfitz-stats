export interface Misfit {
  id: string;
  name: string;
  class: string;
  description: string;

  hp: number;
  dmg: number;
  speed: number;
  range: number;

  attack: string;
  ultimate: string;

  image: string;

  accentColor?: string;
}