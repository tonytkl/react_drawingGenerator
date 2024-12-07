/**
Custom dropdown component with label
@params label: value of the label,
@params options: array of options,
@params value: value of the selected option,
@params setValue: function to set the selected value
*/

type Props = {
  label: string;
  options: string[];
  value: string;
  setValue: (value: string) => void;
};
export const Select = ({ label, options, value, setValue }: Props) => {
  return (
    <div className="flex-col flex justify-start">
      <label className="text-xs text-gray-600 mb-1">{label}</label>
      <select
        className="border border-gray-200 rounded text-sm pr-2 pl-1 py-0.5"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled selected>
          Select {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
