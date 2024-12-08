import { ScreenConfig, Orientation } from "../../type/screenConfig";


type Props = {
  selectedConfig: ScreenConfig;
};
export const MainDrawing = ({ selectedConfig }: Props) => {
  const outerRecDimension =
    selectedConfig.orientation === Orientation.horizontal
      ? "w-[500px] h-[350px] top-[300px] left-[600px]"
      : "w-[350px] h-[500px] top-[200px] left-[700px]";
  const innerRecDimension =
    selectedConfig.orientation === Orientation.horizontal
      ? "w-[470px] h-[320px] top-[315px] left-[615px]"
      : "w-[320px] h-[470px] top-[215px] left-[715px]";
  const dashedRecDimension =
    selectedConfig.orientation === Orientation.horizontal
      ? "w-[400px] h-[250px] top-[350px] left-[650px]"
      : "w-[250px] h-[400px] top-[250px] left-[750px]";

  return (
    <div>
      <div
        className={`${outerRecDimension} border w-9 border-black absolute`}
      ></div>
      <div
        className={`${innerRecDimension} border-4 border-black absolute `}
      ></div>
      <div
        className={`${dashedRecDimension} border border-dashed border-black absolute `}
      ></div>
    </div>
  );
};
