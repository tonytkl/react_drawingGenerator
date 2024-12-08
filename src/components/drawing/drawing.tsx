import { ScreenConfig } from "../../type/screenConfig";
import { Description } from "../../type/description";
import { MainDrawing } from "./mainDrawing";
import { Dimensions } from "./dimensions";
import { Notes } from "./notes";
import { TitleBlock } from "./titleBlock";

type Props = {
  selectedConfig: ScreenConfig;
  descriptionInfo: Description;
};

const NOTES = [
  "Install recessed receptacle box with:",
  "2x Terminated Power Outlets",
  "1x Terminated Data CAT5 Ethernet Outlet",
];

export const Drawing = ({ selectedConfig, descriptionInfo }: Props) => {
  return (
    <div id="drawing" className="flex w-full justify-end p-10">
      <MainDrawing selectedConfig={selectedConfig} />
      <div className="flex flex-col space-y-10">
        <div className="flex space-x-6">
          <Dimensions
            label="Niche Dimensions:"
            dimensionPairs={[
              {
                label: "Height",
                value: selectedConfig.mount?.height,
                suffix: "in",
              },
              {
                label: "Width",
                value: selectedConfig.mount?.width,
                suffix: "in",
              },
              {
                label: "Depth",
                value: selectedConfig.mount?.depth,
                suffix: "in",
              },
            ]}
          />
          <Dimensions
            label="Screen Dimensions:"
            dimensionPairs={[
              {
                label: "Height",
                value: selectedConfig.screen?.height,
                suffix: "in",
              },
              {
                label: "Width",
                value: selectedConfig.screen?.width,
                suffix: "in",
              },
              {
                label: "Floor Line",
                value: selectedConfig.floorDistance,
                suffix: "in",
              },
            ]}
          />
        </div>
        <div className="grow"></div>
        <Notes
          notes={NOTES}
          dimensionPairs={[
            {
              label: "Height",
              value: selectedConfig.recBox?.height,
              suffix: "in",
            },
            {
              label: "Width",
              value: selectedConfig.recBox?.width,
              suffix: "in",
            },
            {
              label: "Depth",
              value: selectedConfig.recBox?.depth,
              suffix: "in",
            },
          ]}
        />
        <TitleBlock descriptionInfo={descriptionInfo} />
      </div>
    </div>
  );
};
