// Custom type for holding data of the screen configuration.
export type ScreenConfig = {
  screen: Screen;
  mediaPlayer: MediaPlayer;
  mount: Mount;
  recBox: RecBox;
  orientation: Orientation;
  installation: Installation;
  screenGap: number;
  floorDistance: number;
  depth: number;
};

export type Screen = {
  model: string;
  make: string;
  size: number;
  height: number;
  width: number;
  depth: number;
  weight: number;
};

export type MediaPlayer = {
  model: string;
  make: string;
  height: number;
  width: number;
  depth: number;
};

export type Mount = {
  model: string;
  brand: string;
  maxLoad: number;
  width: number;
  height: number;
  depth: number;
  clearance: number;
};

export type RecBox = {
  model: string;
  brand: string;
  width: number;
  height: number;
  depth: number;
};

export enum Orientation {
  vertical = "vertical",
  horizontal = "horizontal",
}

export enum Installation {
  niche = "niche",
  flatWall = "flat wall",
}
