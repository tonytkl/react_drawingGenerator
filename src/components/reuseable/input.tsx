/**
 * Custom input component with label
 * @params label: value of the label,
 * @params type: type of the input,
 * @params onChange: function to set the value of the input
 */

type Props = {
  label: string;
  type: string;
  onChange: (value: any) => void;
};
export const Input = ({ label, type, onChange }: Props) => {
  return (
    <div className="flex-col flex justify-start">
      <label className="text-xs text-gray-600 mb-1">{label}</label>
      <input
        className="border border-gray-200 rounded text-sm pr-2 pl-1 py-0.5"
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
