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
    <div className="flex flex-col justify-start">
      <label className="mb-1 text-xs text-gray-600">{label}</label>
      <select
        className="rounded border border-gray-200 py-0.5 pl-1 pr-2 text-sm"
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
