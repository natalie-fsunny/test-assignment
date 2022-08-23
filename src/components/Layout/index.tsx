import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

import styles from "./Layout.module.scss";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main> {children}</main>
      <Footer />
    </div>
  );
};
