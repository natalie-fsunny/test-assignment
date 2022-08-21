import React from "react";
import s from "./Icon.module.scss";
import { icons } from "./utils";

interface Props {
  variant: typeof icons[number];
}

export const Icon: React.FC<Props> = ({ variant }) => {
  return <span className={s.icon + " " + s[variant]}></span>;
};
