import { Button, Icon } from "../../../UI";
import folder from "../../../assets/images/folder.png";
import ellipse from "../../../assets/images/ellipse.png";

import styles from "./WriteToUsSection.module.scss";
import { useTranslation } from "react-i18next";

export const WriteToUsSection = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.write_to_us}>
      <div className={styles.write_to_us_container}>
        <div className={styles.write_to_us_info}>
          <h2 className={styles.h2}>{t("main.write_to_us_title")}</h2>
          <p>{t("main.write_to_us_content")}</p>
          <Button>
            {t("main.write_to_us_button")} <Icon variant="arrowRightFilled" />
          </Button>
        </div>
        <div>
          <img className={styles.folder} src={folder} alt="folder" />
        </div>
      </div>
      <img
        src={ellipse}
        alt="ellipse"
        className={styles.bottom_center_ellipse}
      />
      <img src={ellipse} alt="ellipse" className={styles.top_right_ellipse} />
    </section>
  );
};
