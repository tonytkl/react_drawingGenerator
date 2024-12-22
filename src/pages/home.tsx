import { useState, useEffect } from "react";
import { Controller } from "../components/controller/controller";
import { Drawing } from "../components/drawing/drawing";
import {
  ScreenConfig,
  Screen,
  MediaPlayer,
  Mount,
  RecBox,
  Orientation,
} from "../type/screenConfig";
import {
  readExcel,
  mapScreen,
  mapMediaPlayer,
  mapMount,
  mapRecBox,
} from "../data/excelReader";
import { Description } from "../type/description";

const FILE_NAME = "data.xlsx";

const Home = () => {
  // State to store the selected configuration
  const [selectedConfig, setSelectedConfig] = useState<ScreenConfig>({
    // Default configuration
    orientation: Orientation.horizontal,
    screenGap: 0.5,
    floorDistance: 50,
    depth: 0.5,
  } as ScreenConfig);

  // State to store the description information
  const [descriptionInfo, setDescriptionInfo] = useState<Description>({
    title: "",
  } as Description);

  // State hold data from excel file
  const [screens, setScreen] = useState<Screen[]>([]);
  const [mediaPlayers, setMediaPlayer] = useState<MediaPlayer[]>([]);
  const [mounts, setMount] = useState<Mount[]>([]);
  const [recBoxes, setRecBox] = useState<RecBox[]>([]);

  useEffect(() => {
    readExcel(FILE_NAME)
      .then((data) => {
        setScreen(data.screen.map(mapScreen));
        setMediaPlayer(data.mediaPlayer.map(mapMediaPlayer));
        setMount(data.mounts.map(mapMount));
        setRecBox(data.recBox.map(mapRecBox));
      })
      .catch((err) => {
        console.error("Error reading excel file", err);
      });
  }, []);
  return (
    <div className="App flex h-screen min-h-screen flex-col">
      <div className="absolute flex h-12 w-full items-center bg-dark p-2">
        <img src="logo.png" alt="" className="h-8" />
      </div>
      <div className="flex min-h-screen pt-12">
        <Controller
          screens={screens}
          mediaPlayers={mediaPlayers}
          mounts={mounts}
          recBoxes={recBoxes}
          selectedConfig={selectedConfig}
          setSelectedConfig={setSelectedConfig}
          descriptionInfo={descriptionInfo}
          setDescriptionInfo={setDescriptionInfo}
        />
        <Drawing
          selectedConfig={selectedConfig}
          descriptionInfo={descriptionInfo}
        />
      </div>
    </div>
  );
};

export default Home;
