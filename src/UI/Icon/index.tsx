import React from "react";
import styles from "./Icon.module.scss";
import { icons } from "./utils";

interface IIconProps {
  variant: typeof icons[number];
  fontSize?: number;
}

export const Icon: React.FC<IIconProps> = ({ variant, fontSize = 20 }) => {
  return (
    <span
      style={{ fontSize: fontSize + "px" }}
      className={styles.icon + " " + styles[variant]}
    ></span>
  );
};
