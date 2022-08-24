import { useEffect, useState } from "react";
import { LeftPart } from "./LeftPart";
import { RightPart } from "./RightPart";
import { Button, Icon } from "../../UI";

import styles from "./Footer.module.scss";

export const Footer = () => {
  const [iconUp, setIconUp] = useState<"upFilled" | "upFilledHover">(
    "upFilled"
  );
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
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div
          className={showUpButton ? styles.up_button : styles.hidden_up_button}
        >
          <Button
            variant="circle"
            onClick={() => handleClickUpButton()}
            onMouseEnter={() => {
              setIconUp("upFilledHover");
            }}
            onMouseLeave={() => {
              setIconUp("upFilled");
            }}
            onMouseDown={() => setIconUp("upFilled")}
            onMouseUp={() => setIconUp("upFilledHover")}
          >
            <Icon variant={iconUp} fontSize={30} />
          </Button>
        </div>
        <LeftPart />
        <RightPart />
      </div>
    </footer>
  );
};
