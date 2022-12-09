import { ChangeEvent, FC } from "react";

type TSelectForm = {
  // value: string;
  labelName: string;
  options: string[];
  // placeholder?: string | undefined;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectForm: FC<TSelectForm> = ({
  // value,
  labelName,
  options,
  // placeholder,
  onChange,
}: TSelectForm) => {
  return (
    <div className="space-y-3">
      <label
        htmlFor={labelName}
        className="block text-sm font-medium text-gray-900"
      >
        {labelName}
      </label>
      <select
        id={labelName}
        onChange={onChange}
        defaultValue={options[0]}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
      >
        {options &&
          options.map((option, index) => (
            <option key={index + option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectForm;
