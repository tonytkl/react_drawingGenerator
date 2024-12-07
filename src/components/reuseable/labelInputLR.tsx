/**
 * Custom component for displaying label and a value side by side. The value can be an input field or a text.
 * @param label - The label to be displayed on the left side.
 * @param isInput - A boolean value to determine if the value should be an input field or a text.
 * @param onChange - A function to be called when the value is changed.
 * @param value - The value to be displayed on the right side (if the filed is not an input).
 * @param type - The type of the input field.
 * @param suffix - The suffix to be displayed after the value.
 */

type Props = {
  label: string;
  isInput: boolean;
  onChange?: (value: string | number) => void;
  value?: string | number;
  type?: string;
  suffix?: string;
};
export const LabelInputLR = ({
  label,
  isInput,
  onChange,
  value,
  type,
  suffix,
}: Props) => {
  return (
    <div className="w-full flex">
      <div className="border text-center border-gray-600 bg-gray-300 text-xs p-2 w-1/2">
        {label}
      </div>
      {isInput && onChange ? (
        <div className="border border-l-0  border-gray-600 p-2 w-1/2 flex">
          <input
            type={type}
            value={value}
            className={`text-xs ${
              suffix ? "w-3/4 text-right" : "w-full text-center"
            }`}
            onChange={(e) => onChange(e.target.value)}
          />
          {suffix && <div className="w-1/4 text-xs">{suffix}</div>}
        </div>
      ) : (
        <div className="border border-l-0 text-xs border-gray-600 p-2 w-1/2 flex">
          <div
            className={`text-xs ${
              suffix ? "w-3/4 text-right mr-4" : "w-full text-center"
            }`}
          >
            {value}
          </div>
          {suffix && <div className="w-1/4 text-xs">{suffix}</div>}
        </div>
      )}
    </div>
  );
};
