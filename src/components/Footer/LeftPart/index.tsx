import React from "react";
import { Logo } from "../../../UI";
import { SocialIcons } from "../SocialIcons";
import styles from "./LeftPart.module.scss";

export const LeftPart = () => {
  return (
    <aside className={styles.left}>
      <Logo />
      <div className={styles.contacts}>
        Reg. nunber: 12735787 <br />
        Veerenni tn 36a/2-4, Tallinn <br />
        E-mail: info@ittalent.ee
      </div>
      <SocialIcons />
      <div className={styles.menu}>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy policy</li>
          <li>Eesti Töötukassa</li>
        </ul>
        <span className={styles.copyright}>© Copyright - IT TALENT</span>
      </div>
    </aside>
  );
};
