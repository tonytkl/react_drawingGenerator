import { Description } from "../../type/description";
import { Input } from "../reuseable/input";

/**
 * Component for user to input drawing description information
 * @param descriptionInfo: Description object
 * @param setDescriptionInfo: function to set the description object
 */

type Props = {
  descriptionInfo: Description;
  setDescriptionInfo: (description: Description) => void;
};
export const DescriptionInfo = ({
  descriptionInfo,
  setDescriptionInfo,
}: Props) => {
  return (
    <div className="space-y-2 border border-gray-400 p-6">
      <h1 className="mb-2 text-lg font-bold">Description</h1>
      <Input
        label="Name"
        type="text"
        onChange={(text) =>
          setDescriptionInfo({ ...descriptionInfo, title: text })
        }
      />
      <Input
        label="Drawer"
        type="text"
        onChange={(text) =>
          setDescriptionInfo({ ...descriptionInfo, drawer: text })
        }
      />
      <Input
        label="Department"
        type="text"
        onChange={(text) =>
          setDescriptionInfo({ ...descriptionInfo, department: text })
        }
      />
      <Input
        label="Screen Size"
        type="text"
        onChange={(text) =>
          setDescriptionInfo({ ...descriptionInfo, screenSize: text })
        }
      />
      <Input
        label="Date"
        type="date"
        onChange={(text) =>
          setDescriptionInfo({ ...descriptionInfo, date: text })
        }
      />
    </div>
  );
};
