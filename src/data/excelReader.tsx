import { read, utils } from "xlsx";
import { Screen } from "../type/screenConfig";

const SHEET_NAME = [
  //   "Screen MFR",
  //   "Media Player MFR",
  //   "Mounts",
  //   "Receptacle Box",
  "screen",
  "mediaPlayer",
  "mounts",
  "recBox",
];

type fileData = {
  screen: Object[];
  mediaPlayer: Object[];
  mounts: Object[];
  recBox: Object[];
};

export const readExcel = async (fileName: string): Promise<fileData> => {
  const response = await fetch(fileName);
  const arrayBuffer = await response.arrayBuffer();
  const workbook = read(arrayBuffer, { type: "array" });

  const data: fileData = {
    screen: [],
    mediaPlayer: [],
    mounts: [],
    recBox: [],
  };
  const sheetNames = workbook.SheetNames;

  for (let i = 0; i < sheetNames.length; i++) {
    const sheet = workbook.Sheets[sheetNames[i]];
    data[SHEET_NAME[i] as keyof fileData] = utils.sheet_to_json(sheet);
  }

  return data;
};

export const mapScreen = (data: any): Screen => {
  return {
    model: data["Screen MFR"],
    make: data.Make,
    size: data["Screen Size"],
    height: data.Height,
    width: data.Width,
    depth: data.Depth,
    weight: data["Weight (LBS)"],
  };
};

export const mapMediaPlayer = (data: any) => {
  return {
    model: data["MFG. PART"],
    make: data["Make"],
    height: data.Height,
    width: data.Width,
    depth: data.Depth,
  };
};

export const mapMount = (data: any) => {
  return {
    model: data["MFG. PART"],
    brand: data["Brand"],
    maxLoad: data["Maximum Load (lbs)"],
    width: data["Width (in)"],
    height: data["Height (in)"],
    depth: data["Depth (in)"],
    clearance: data["Clearance needed around screen"],
  };
};

export const mapRecBox = (data: any) => {
  return {
    model: data["MFG. PART"],
    brand: data["Brand"],
    width: data["Width (in)"],
    height: data["Height (in)"],
    depth: data["Depth (in)"],
  };
};
