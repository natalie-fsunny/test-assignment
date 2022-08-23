import { LeftPart } from "./LeftPart";
import { RightPart } from "./RightPart";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <LeftPart />
        <RightPart />
      </div>
    </footer>
  );
};
