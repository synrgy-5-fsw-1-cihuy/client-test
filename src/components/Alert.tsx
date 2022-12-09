import { ReactNode } from "react";
type IAlert = {
  children: ReactNode;
};

const Alert = ({ children }: IAlert) => {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded"
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;