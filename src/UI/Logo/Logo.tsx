import { ReactComponent as LogoImage } from "../../assets/images/logo.svg";
import s from "./Logo.module.scss"

export const Logo = () => {
  return <LogoImage className={s.logo}/>;
};
