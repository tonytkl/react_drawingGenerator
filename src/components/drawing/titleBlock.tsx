import { Description } from "../../type/description";

/**
 * Custom component for displaying the title block of the drawing.
 * @param descriptionInfo - The description information of the screen.
 */

type Props = {
  descriptionInfo: Description;
};
export const TitleBlock = ({ descriptionInfo }: Props) => {
  const transparentText = descriptionInfo.title === "" ? "opacity-0" : "";
  return (
    <div className="flex-col border border-gray-400 p-4">
      <div className="mb-4 flex w-full space-x-10">
        <img className="w-28 object-contain" src="logo.png" alt="logo" />
        <div className="flex flex-1 flex-col">
          <h2 className="font-bold">Description:</h2>
          <h3
            className={`min-w-0 flex-shrink flex-grow whitespace-normal text-sm font-bold ${transparentText}`}
          >
            {descriptionInfo.title === ""
              ? "Placeholder"
              : descriptionInfo.title}
          </h3>
        </div>
      </div>
      <div className="grid border-collapse grid-flow-row grid-cols-4 grid-rows-4 border">
        <p className="border-[0.5px] bg-orange-100 p-1 text-center font-bold">
          Drawn
        </p>
        <p className="row-span-2 overflow-auto border-[0.5px] bg-orange-100 p-1 text-center font-bold">
          Dimension <br /> In Inches
        </p>
        <div className="row-span-2 overflow-auto border-[0.5px] p-1 text-center font-bold">
          <img src="angle_symbol.png" alt="angle" className="w-20 bg-none" />
        </div>
        <p className="border-[0.5px] bg-orange-100 p-1 text-center font-bold">
          Screen Size
        </p>
        <p className="border-[0.5px] p-1 text-center text-xs">
          {descriptionInfo.drawer}
        </p>
        <p className="border-[0.5px] p-1 text-center text-xs">
          {descriptionInfo.screenSize}
        </p>
        <p className="border-[0.5px] bg-orange-100 p-1 text-center font-bold">
          Date
        </p>
        <p className="border-[0.5px] bg-orange-100 p-1 text-center font-bold">
          Sheet
        </p>
        <p className="border-[0.5px] bg-orange-100 p-1 text-center font-bold">
          Revision
        </p>
        <p className="border-[0.5px] bg-orange-100 p-1 text-center font-bold">
          Department
        </p>
        <p className="border-[0.5px] p-1 text-center text-xs">
          {descriptionInfo.date}
        </p>
        <p className="border-[0.5px] p-1 text-center text-xs">1 of 1</p>
        <p className="border-[0.5px] p-1 text-center text-xs">00</p>
        <p className="border-[0.5px] p-1 text-center text-xs">
          {descriptionInfo.department}
        </p>
      </div>
    </div>
  );
};
