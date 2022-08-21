import React from "react";
import s from "./Icon.module.scss";
import { icons } from "./utils";

interface Props {
  variant: typeof icons[number];
  fontSize?: number;
}

export const Icon: React.FC<Props> = ({ variant, fontSize = 20 }) => {
  return (
    <span
      style={{ fontSize: fontSize + "px" }}
      className={s.icon + " " + s[variant]}
    ></span>
  );
};
