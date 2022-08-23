import { Button, Icon } from "../../../UI";
import folder from "../../../assets/images/folder.png";
import ellipse from "../../../assets/images/ellipse.png";

import styles from "./WriteToUsSection.module.scss";

export const WriteToUsSection = () => {
  return (
    <section className={styles.write_to_us}>
      <div className={styles.write_to_us_container}>
        <div className={styles.write_to_us_info}>
          <h2 className={styles.h2}>
            ИДЕИ ДЛЯ*
            <br /> СОТРУДНИЧЕСТВА
          </h2>
          <p>
            Мы всегда открыты ко всем интересным предложениям и готовы обсудить
            их лично с Вами. Просто напишите нам
          </p>
          <Button>
            Write to us <Icon variant="arrowRightFilled" />
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
