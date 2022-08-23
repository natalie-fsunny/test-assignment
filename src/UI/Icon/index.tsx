import React from "react";
import { icons } from "./utils";
import cn from "classnames";
import styles from "./Icon.module.scss";

interface IIconProps {
  variant: typeof icons[number];
  fontSize?: number;
}

export const Icon: React.FC<IIconProps> = ({ variant, fontSize = 20 }) => {
  const iconClassName = cn(styles.icon, styles[variant]);

  return (
    <span
      style={{ fontSize: fontSize + "px" }}
      className={iconClassName}
    ></span>
  );
};
