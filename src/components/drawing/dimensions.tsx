import { LabelInputLR } from "../reuseable/labelInputLR";

/**
 * Custom component for displaying dimensions.
 * @param label - The label to be displayed on the top.
 * @param dimensionPairs - An array of dimension pairs to be displayed.
 */

type Props = {
  label: string;
  dimensionPairs: { label: string; value: string | number; suffix: string }[];
};
export const Dimensions = ({ label, dimensionPairs }: Props) => {
  return (
    <div className="w-full border border-gray-400 p-6">
      <h1 className="mb-4 text-xl font-bold">{label}</h1>
      <div className="flex-col space-y-2">
        {dimensionPairs.map((dimensionPair, index) => (
          <LabelInputLR
            key={index}
            label={dimensionPair.label}
            isInput={false}
            value={dimensionPair.value}
            suffix={dimensionPair.suffix}
          />
        ))}
      </div>
    </div>
  );
};
