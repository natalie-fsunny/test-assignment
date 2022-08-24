import { useState, useEffect } from "react";
import { Parallax, Background } from "react-parallax";
import ellipse from "../../assets/images/ellipse.png";
import { Content } from "./Content";
import { WriteToUsSection } from "./WriteToUsSection";
import { Button, Icon } from "../../UI";

import styles from "./Privacy.module.scss";

export const Privacy = () => {
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setShowUpButton(true);
        console.log(window.scrollY);
      } else {
        setShowUpButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClickUpButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.privacy}>
      <Parallax strength={800}>
        <Background className={styles.background}>
          <img src={ellipse} alt="ellipse" className={styles.ellipse} />
        </Background>
        <Content />
      </Parallax>
      <WriteToUsSection />
      <div className={styles.buttons}>
        <div
          className={showUpButton ? styles.up_button : styles.hidden_up_button}
        >
          <Button variant="circle" onClick={() => handleClickUpButton()}>
            <Icon variant="upFilled" />
          </Button>
        </div>
        <div className={styles.chat_button}>
          <Button variant="circle">
            <Icon variant="chatFilled" fontSize={25} />
          </Button>
        </div>
      </div>
    </div>
  );
};
