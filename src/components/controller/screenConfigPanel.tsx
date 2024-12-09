import {
  Screen,
  MediaPlayer,
  Mount,
  RecBox,
  ScreenConfig,
  Orientation,
  Installation,
} from "../../type/screenConfig";
import { Select } from "../reuseable/select";
import { Toggle } from "../reuseable/toggle";
import { LabelInputLR } from "../reuseable/labelInputLR";

/**
 * Component for displaying the screen configuration panel.
 * @param screens - The list of screens.
 * @param mediaPlayers - The list of media players.
 * @param mounts - The list of mounts.
 * @param recBoxes - The list of receptacle boxes.
 * @param selectedConfig - The selected screen configuration.
 * @param setSelectedConfig - A function to be called when the screen configuration is changed.
 */

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
    <div className="space-y-4 border border-gray-400 px-6 py-10">
      <h1 className="mb-2 text-xl font-bold">Configuration</h1>
      <Select
        label="Screen"
        options={screens.map((screen) => screen.model)}
        value={selectedConfig.screen?.model}
        setValue={(model) => {
          const selected = screens.find((screen) => screen.model === model);
          if (selected) {
            const updatedConfig = { ...selectedConfig, screen: selected };
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
            (mediaPlayer) => mediaPlayer.model === model,
          );
          if (selected) {
            const updatedConfig = { ...selectedConfig, mediaPlayer: selected };
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
            const updatedConfig = { ...selectedConfig, mount: selected };
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
            const updatedConfig = { ...selectedConfig, recBox: selected };
            setSelectedConfig(updatedConfig);
          }
        }}
      />
      <Toggle
        values={[Orientation.horizontal, Orientation.vertical]}
        setValue={(value) =>
          setSelectedConfig({
            ...selectedConfig,
            orientation: value as Orientation,
          })
        }
      />
      <Toggle
        values={[Installation.niche, Installation.flatWall]}
        setValue={(value) =>
          setSelectedConfig({
            ...selectedConfig,
            installation: value as Installation,
          })
        }
      />
      <LabelInputLR
        label="Floor Distance"
        isInput={true}
        onChange={(value) => {
          setSelectedConfig({
            ...selectedConfig,
            floorDistance: parseFloat(value as string),
          });
        }}
        suffix="in"
        type="number"
      />
      <LabelInputLR
        label="Niche Depth Var"
        isInput={true}
        onChange={(value) => {
          setSelectedConfig({
            ...selectedConfig,
            depth: parseFloat(value as string),
          });
        }}
        suffix="in"
        type="number"
      />
    </div>
  );
};
