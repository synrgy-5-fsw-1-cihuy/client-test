import React, { ChangeEvent, FC } from "react";

type TInputForm = {
  value?: string | number;
  type: "email" | "password" | "text" | "number" | "file";
  labelName: string;
  placeholder?: string | undefined;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const InputForm: FC<TInputForm> = ({
  value,
  type,
  labelName,
  placeholder,
  onChange,
  ...props
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
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
        placeholder={placeholder}
        required
        {...props}
      />
    </div>
  );
};

export default InputForm;
