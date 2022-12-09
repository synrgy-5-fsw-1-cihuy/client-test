import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutWrapperProps = {
  children: ReactNode;
  custom?: boolean;
};

const Layout = ({ children, custom = false }: LayoutWrapperProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {custom ? children : <main className="flex-1">{children}</main>}
      <Footer />
    </div>
  );
};

export default Layout;
