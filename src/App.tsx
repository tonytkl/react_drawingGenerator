import { useState, useEffect } from "react";
import { Controller } from "./components/controller/controller";
import { Drawing } from "./components/drawing/drawing";
import {
  ScreenConfig,
  Screen,
  MediaPlayer,
  Mount,
  RecBox,
} from "./type/screenConfig";

import {
  readExcel,
  mapScreen,
  mapMediaPlayer,
  mapMount,
  mapRecBox,
} from "./data/excelReader";

// import generatePDF from "react-to-pdf";

function App() {
  const [selectedConfig, setSelectedConfig] = useState<ScreenConfig>(
    {} as ScreenConfig
  );

  const [screens, setScreen] = useState<Screen[]>([]);
  const [mediaPlayers, setMediaPlayer] = useState<MediaPlayer[]>([]);
  const [mounts, setMount] = useState<Mount[]>([]);
  const [recBoxes, setRecBox] = useState<RecBox[]>([]);

  useEffect(() => {
    readExcel("data.xlsx")
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
    <div className="App flex flex-col h-screen min-h-screen ">
      <div className="w-full bg-dark p-2">
        <img src="logo.png" alt="" className="w-24" />
      </div>
      <div className="flex">
        <Controller
          screens={screens}
          mediaPlayers={mediaPlayers}
          mounts={mounts}
          recBoxes={recBoxes}
          selectedConfig={selectedConfig}
          setSelectedConfig={setSelectedConfig}
        />
        <Drawing />
      </div>
    </div>
  );
}

export default App;
