import React, { useState } from "react";
import { Icon, Logo } from "../../UI";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo />
        <div className={s.menus}>
          <nav className={s.menu + " " + s.first}>
            <div>Recruiting</div>
            <div className={s.activeMenuItem}>Academy</div>
          </nav>
          <nav className={s.menu + " " + s.second}>
            <div>Courses</div>
            <div>About us</div>
            <div>Blog</div>
          </nav>
        </div>
        <div className={s.language}>
          <span>Eng</span> <Icon variant="arrow" fontSize={5} />
        </div>
        <div className={s.hamburger}>
          <Icon variant="hamburger" />
        </div>
      </div>
    </header>
  );
};
