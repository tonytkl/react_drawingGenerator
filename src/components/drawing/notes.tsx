import { LabelInputLR } from "../reuseable/labelInputLR";

type Props = {
  notes: string[];
  dimensionPairs: { label: string; value: string | number; suffix: string }[];
};
export const Notes = ({ notes, dimensionPairs }: Props) => {
  return (
    <div className="flex space-x-2 border border-gray-400 p-6">
      <div className="flex-col">
        <h1 className="text-2xl font-bold">Notes</h1>
        {notes.map((note, index) => (
          <p key={index}>{note}</p>
        ))}
      </div>
      <div className="w-1/2 flex-col space-y-2">
        <h1 className="mb-2 text-2xl font-bold">Dimensions</h1>
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
