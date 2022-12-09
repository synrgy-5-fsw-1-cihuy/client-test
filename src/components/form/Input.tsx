import React, { ChangeEvent, FC } from "react";

type TInputForm = {
  name: string;
  type: "email" | "password" | "text";
  labelName: string;
  placeholder: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputForm: FC<TInputForm> = ({
  name,
  type,
  labelName,
  placeholder,
  onChange,
}: TInputForm) => {
  return (
    <div className="space-y-3">
      <label
        htmlFor={labelName}
        className="block text-sm font-medium text-gray-900"
      >
        {labelName}
      </label>
      <input
        id={labelName}
        type={type}
        name={labelName}
        onChange={onChange}
        value={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputForm;
