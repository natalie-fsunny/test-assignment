import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

import s from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
