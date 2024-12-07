import { Description } from "./description";
import { ScreenConfigPanel } from "./screenConfigPanel";
import {
  Screen,
  MediaPlayer,
  Mount,
  RecBox,
  ScreenConfig,
} from "../../type/screenConfig";

type Props = {
  screens: Screen[];
  mediaPlayers: MediaPlayer[];
  mounts: Mount[];
  recBoxes: RecBox[];
  selectedConfig: ScreenConfig;
  setSelectedConfig: (config: ScreenConfig) => void;
};
export const Controller = ({
  screens,
  mediaPlayers,
  mounts,
  recBoxes,
  selectedConfig,
  setSelectedConfig,
}: Props) => {
  return (
    <div className="flex">
      <ScreenConfigPanel
        screens={screens}
        mediaPlayers={mediaPlayers}
        mounts={mounts}
        recBoxes={recBoxes}
        selectedConfig={selectedConfig}
        setSelectedConfig={setSelectedConfig}
      />
      <Description />
    </div>
  );
};
