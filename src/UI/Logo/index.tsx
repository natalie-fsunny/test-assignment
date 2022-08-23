import { ReactComponent as LogoImage } from "../../assets/images/logo.svg";
import styles from "./Logo.module.scss"

export const Logo = () => {
  return <LogoImage className={styles.logo}/>;
};
