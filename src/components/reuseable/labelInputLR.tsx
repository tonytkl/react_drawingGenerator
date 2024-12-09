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
    <div className="flex w-full">
      <div className="w-1/2 border border-gray-600 bg-gray-300 p-2 text-center text-sm">
        {label}
      </div>
      {isInput && onChange ? (
        <div className="flex w-1/2 border border-l-0 border-gray-600 p-2">
          <input
            type={type}
            value={value}
            className={`text-sm ${
              suffix ? "w-3/4 text-right" : "w-full text-center"
            }`}
            onChange={(e) => onChange(e.target.value)}
          />
          {suffix && <div className="w-1/4 text-sm">{suffix}</div>}
        </div>
      ) : (
        <div className="flex w-1/2 border border-l-0 border-gray-600 p-2 text-sm">
          <div
            className={`text-sm ${
              suffix ? "mr-4 w-3/4 text-right" : "w-full text-center"
            }`}
          >
            {value}
          </div>
          {suffix && <div className="w-1/4 text-sm">{suffix}</div>}
        </div>
      )}
    </div>
  );
};
