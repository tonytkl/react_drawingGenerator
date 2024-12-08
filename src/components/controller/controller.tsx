import { DescriptionInfo } from "./description";
import { ScreenConfigPanel } from "./screenConfigPanel";
import {
  Screen,
  MediaPlayer,
  Mount,
  RecBox,
  ScreenConfig,
} from "../../type/screenConfig";
import { Description } from "../../type/description";
import generatePDF from "react-to-pdf";

/**
 * Component to hold the ScreenConfigPanel and DescriptionInfo and download button
 * @param screens: list of screens
 * @param mediaPlayers: list of media players
 * @param mounts: list of mounts
 * @param recBoxes: list of rec boxes
 * @param selectedConfig: selected screen config
 * @param setSelectedConfig: function to set the selected screen config
 * @param descriptionInfo: description info
 * @param setDescriptionInfo: function to set the description info
 */

type Props = {
  screens: Screen[];
  mediaPlayers: MediaPlayer[];
  mounts: Mount[];
  recBoxes: RecBox[];
  selectedConfig: ScreenConfig;
  setSelectedConfig: (config: ScreenConfig) => void;
  descriptionInfo: Description;
  setDescriptionInfo: (description: Description) => void;
};
export const Controller = ({
  screens,
  mediaPlayers,
  mounts,
  recBoxes,
  selectedConfig,
  setSelectedConfig,
  descriptionInfo,
  setDescriptionInfo,
}: Props) => {
  const getTargetElement = (): HTMLElement => {
    const element = document.getElementById("drawing");
    if (!element) {
      throw new Error("Element with id 'drawing' not found");
    }
    return element as HTMLElement;
  };
  const downloadPdf = () => generatePDF(getTargetElement);
  return (
    <div className="flex-col space-y-4 overflow-y-auto p-4">
      <ScreenConfigPanel
        screens={screens}
        mediaPlayers={mediaPlayers}
        mounts={mounts}
        recBoxes={recBoxes}
        selectedConfig={selectedConfig}
        setSelectedConfig={setSelectedConfig}
      />
      <DescriptionInfo
        descriptionInfo={descriptionInfo}
        setDescriptionInfo={setDescriptionInfo}
      />
      <button
        className="w-full bg-blue-800 p-2 text-white hover:bg-blue-600"
        onClick={downloadPdf}
      >
        Download PDF
      </button>
    </div>
  );
};
