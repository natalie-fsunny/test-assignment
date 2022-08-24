import { useTranslation } from "react-i18next";
import { Icon, Logo } from "../../UI";
import styles from "./Header.module.scss";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.menus}>
          <nav className={styles.menu + " " + styles.first}>
            <div>{t("header.recruiting")}</div>
            <div className={styles.activeMenuItem}>{t("header.academy")}</div>
          </nav>
          <nav className={styles.menu + " " + styles.second}>
            <div>{t("header.courses")}</div>
            <div>{t("header.about_us")}</div>
            <div>{t("header.blog")}</div>
          </nav>
        </div>
        <div className={styles.language}>
          <span>{t("header.eng")}</span> <Icon variant="arrow" fontSize={5} />
        </div>
        <div className={styles.hamburger}>
          <Icon variant="hamburger" />
        </div>
      </div>
    </header>
  );
};
