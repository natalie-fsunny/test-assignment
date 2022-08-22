import { Button, Icon, Input, Logo } from "../../UI";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <aside className={s.left}>
          <Logo />
          <div className={s.contacts}>
            Reg. nunber: 12735787 <br />
            Veerenni tn 36a/2-4, Tallinn <br />
            E-mail: info@ittalent.ee
          </div>
          <div className={s.social_icons}>
            <Icon variant="instagram" />
            <Icon variant="linkedin" />
            <Icon variant="youtube" />
            <Icon variant="facebook" />
            <Icon variant="telegram" />
          </div>
          <div className={s.menu}>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy policy</li>
              <li>Eesti Töötukassa</li>
            </ul>
            <span className={s.copyright}>© Copyright - IT TALENT</span>
          </div>
        </aside>

        <aside className={s.right}>
          <h4 className={s.subtitle}>Subscribe to our blog</h4>
          <div className={s.slogan}>
            Будьте в курсе всех актуальных новостей по рекрутингу
          </div>
          <section className={s.subscribtion_form}>
            <div className={s.form}>
              <Input placeholder="E-mail" />
              <Button>
                Subscribe <Icon variant="arrowRightFilled" fontSize={15} />
              </Button>
            </div>
            <div className={s.description}>
              By clicking the subscribe button, you agree receive the latest
              news of IT Talent
            </div>
          </section>
          <div className={s.social_icons}>
            <Icon variant="instagram" />
            <Icon variant="linkedin" />
            <Icon variant="youtube" />
            <Icon variant="facebook" />
            <Icon variant="telegram" />
          </div>
        </aside>
      </div>
    </footer>
  );
};
