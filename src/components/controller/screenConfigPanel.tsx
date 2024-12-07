import {
  Screen,
  MediaPlayer,
  Mount,
  RecBox,
  ScreenConfig,
} from "../../type/screenConfig";
import { Select } from "../reuseable/select";
type Props = {
  screens: Screen[];
  mediaPlayers: MediaPlayer[];
  mounts: Mount[];
  recBoxes: RecBox[];
  selectedConfig: ScreenConfig;
  setSelectedConfig: (config: ScreenConfig) => void;
};
export const ScreenConfigPanel = ({
  screens,
  mediaPlayers,
  mounts,
  recBoxes,
  selectedConfig,
  setSelectedConfig,
}: Props) => {
  return (
    <div className="border border-gray-400 px-2 py-4 space-y-3">
      <h1 className="text-lg font-bold mb-2">Configuration</h1>
      <Select
        label="Screen"
        options={screens.map((screen) => screen.model)}
        value={selectedConfig.screen?.model}
        setValue={(model) => {
          const selected = screens.find((screen) => screen.model === model);
          if (selected) {
            const updatedConfig = { ...selectedConfig, selected };
            setSelectedConfig(updatedConfig);
          }
        }}
      />
      <Select
        label="Media Player"
        options={mediaPlayers.map((mediaPlayer) => mediaPlayer.model)}
        value={selectedConfig.mediaPlayer?.model}
        setValue={(model) => {
          const selected = mediaPlayers.find(
            (mediaPlayer) => mediaPlayer.model === model
          );
          if (selected) {
            const updatedConfig = { ...selectedConfig, selected };
            setSelectedConfig(updatedConfig);
          }
        }}
      />
      <Select
        label="Mount"
        options={mounts.map((mount) => mount.model)}
        value={selectedConfig.mount?.model}
        setValue={(model) => {
          const selected = mounts.find((mount) => mount.model === model);
          if (selected) {
            const updatedConfig = { ...selectedConfig, selected };
            setSelectedConfig(updatedConfig);
          }
        }}
      />
      <Select
        label="Receptacle Box"
        options={recBoxes.map((recBox) => recBox.model)}
        value={selectedConfig.recBox?.model}
        setValue={(model) => {
          const selected = recBoxes.find((recBox) => recBox.model === model);
          if (selected) {
            const updatedConfig = { ...selectedConfig, selected };
            setSelectedConfig(updatedConfig);
          }
        }}
      />
    </div>
  );
};
