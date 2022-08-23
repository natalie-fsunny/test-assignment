import { Icon, Logo } from "../../UI";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.menus}>
          <nav className={styles.menu + " " + styles.first}>
            <div>Recruiting</div>
            <div className={styles.activeMenuItem}>Academy</div>
          </nav>
          <nav className={styles.menu + " " + styles.second}>
            <div>Courses</div>
            <div>About us</div>
            <div>Blog</div>
          </nav>
        </div>
        <div className={styles.language}>
          <span>Eng</span> <Icon variant="arrow" fontSize={5} />
        </div>
        <div className={styles.hamburger}>
          <Icon variant="hamburger" />
        </div>
      </div>
    </header>
  );
};
