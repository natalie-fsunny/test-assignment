import React from "react";
import { Icon } from "../../../UI";
import styles from "./SocialIcons.module.scss";

export const SocialIcons = () => {
  return (
    <div className={styles.social_icons}>
      <Icon variant="instagram" />
      <Icon variant="linkedin" />
      <Icon variant="youtube" />
      <Icon variant="facebook" />
      <Icon variant="telegram" />
    </div>
  );
};
