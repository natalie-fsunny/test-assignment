import { useTranslation } from "react-i18next";
import { Button, Icon, Input } from "../../../UI";
import { SocialIcons } from "../SocialIcons";
import styles from "./RightPart.module.scss";

export const RightPart = () => {
  const { t } = useTranslation();

  return (
    <aside className={styles.right}>
      <h4 className={styles.subtitle}>{t("footer.subscribe_to_our_blog")}</h4>
      <div className={styles.slogan}>{t("footer.slogan")}</div>
      <section className={styles.subscribtion_form}>
        <form className={styles.form}>
          <Input placeholder="E-mail" type="email"/>
          <Button type="submit">
            {t("footer.subscribe")}
            <Icon variant="arrowRightFilled" fontSize={15} />
          </Button>
        </form>
        <div className={styles.description}>{t("footer.description")}</div>
      </section>
      <div className={styles.social_icons}>
        <SocialIcons />
      </div>
    </aside>
  );
};
