import React from "react";
import { useTranslation } from "react-i18next";
import { Logo } from "../../../UI";
import { SocialIcons } from "../SocialIcons";
import styles from "./LeftPart.module.scss";

export const LeftPart = () => {
  const { t } = useTranslation();

  return (
    <aside className={styles.left}>
      <Logo />
      <div className={styles.contacts}>
        Reg. nunber: 12735787 <br />
        Veerenni tn 36a/2-4, Tallinn <br />
        E-mail: info@ittalent.ee
      </div>
      <div className={styles.social_icons}>
        <SocialIcons />
      </div>
      <div className={styles.menu}>
        <ul>
          <li>{t("footer.terms_conditions")}</li>
          <li>{t("footer.privacy_policy")}</li>
          <li>{t("footer.Eesti_Töötukassa")}</li>
        </ul>
        <span className={styles.copyright}>{t("footer.copyright")}</span>
      </div>
    </aside>
  );
};
