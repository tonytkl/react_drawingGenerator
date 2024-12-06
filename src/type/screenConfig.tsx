export type ScreenConfig = {
  screen: Screen;
  mediaPlayer: MediaPlayer;
  mount: Mount;
  recBox: RecBox;
  orientation: Orientation;
  installation: Installation;
  floorDistance: number;
  depth: number;
};

type Screen = {
  make: string;
  size: number;
  width: number;
  depth: number;
};

type MediaPlayer = {
  make: string;
  height: number;
  width: number;
  depth: number;
};

type Mount = {
  brand: string;
  maxLoad: number;
  width: number;
  height: number;
  depth: number;
  clearance: number;
};

type RecBox = {
  brand: string;
  width: number;
  height: number;
  depth: number;
};

enum Orientation {
  vertical = "vertical",
  horizontal = "horizontal",
}

enum Installation {
  niche = "niche",
  flatWall = "flat wall",
}
