import { Parallax, Background } from "react-parallax";
import ellipse from "../../assets/images/ellipse.png";
import { Content } from "./Content";
import { WriteToUsSection } from "./WriteToUsSection";
import { Button, Icon } from "../../UI";

import styles from "./Privacy.module.scss";

export const Privacy = () => {
  

  return (
    <div className={styles.privacy}>
      <Parallax strength={800}>
        <Background className={styles.background}>
          <img src={ellipse} alt="ellipse" className={styles.ellipse} />
        </Background>
        <Content />
      </Parallax>
      <WriteToUsSection />
      <div className={styles.chat_button}>
        <Button variant="circle">
          <Icon variant="chatFilled" fontSize={25} />
        </Button>
      </div>
    </div>
  );
};
