import { useState } from "react";

/**
Custom toggle component
@params values: values of all toggle options,
@params setValue: function to set the selected value
*/

type Props = {
  values: string[];
  setValue: (value: string) => void;
};

const selectedStyle = "bg-gray-600 text-white";
const unselectedStyle = "bg-white text-black";

export const Toggle = ({ values, setValue }: Props) => {
  const [selected, setSelected] = useState(values[0]);
  return (
    <div className="w-full">
      {values.map((value) => (
        <button
          key={value}
          className={`${
            selected === value ? selectedStyle : unselectedStyle
          } w-1/2 border border-gray-600 p-2 text-xs transition-all duration-300`}
          onClick={() => {
            setValue(value);
            setSelected(value);
          }}
        >
          {value[0].toUpperCase() + value.slice(1)}
        </button>
      ))}
    </div>
  );
};
