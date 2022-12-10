import clsx from "clsx";
import { ReactNode } from "react";
type IAlert = {
  type?: "error" | "success";
  children: ReactNode;
};

const variants = {
  type: {
    error: "text-red-700 bg-red-100",
    success: "text-green-700 bg-green-100",
  },
};

const Alert = ({ type = "error", children }: IAlert) => {
  return (
    <div
      className={clsx("p-4 mb-4 text-sm rounded", variants.type[type])}
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
