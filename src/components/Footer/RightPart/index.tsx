import React from "react";
import { Button, Icon, Input } from "../../../UI";
import { SocialIcons } from "../SocialIcons";
import styles from "./RightPart.module.scss";

export const RightPart = () => {
  return (
    <aside className={styles.right}>
      <h4 className={styles.subtitle}>Subscribe to our blog</h4>
      <div className={styles.slogan}>
        Будьте в курсе всех актуальных новостей по рекрутингу
      </div>
      <section className={styles.subscribtion_form}>
        <div className={styles.form}>
          <Input placeholder="E-mail" />
          <Button>
            Subscribe <Icon variant="arrowRightFilled" fontSize={15} />
          </Button>
        </div>
        <div className={styles.description}>
          By clicking the subscribe button, you agree receive the latest news of
          IT Talent
        </div>
      </section>
      <SocialIcons />
    </aside>
  );
};
