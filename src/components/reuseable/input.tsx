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
    <div className="flex flex-col justify-start">
      <label className="mb-1 text-xs text-gray-600">{label}</label>
      <input
        className="rounded border border-gray-200 py-0.5 pl-1 pr-2 text-sm"
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
