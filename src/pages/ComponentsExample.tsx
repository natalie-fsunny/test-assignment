import { useState } from "react";
import { Header } from "../components";
import { Footer } from "../components/Footer";
import { Button, Input, Logo } from "../UI";
import { Icon } from "../UI";
import { icons } from "../UI/Icon/utils";
import s from "./ComponentsExample.module.scss";

export const ComponentsExample = () => {
  const [iconUp, setIconUp] = useState<"upFilled" | "upFilledHover">(
    "upFilled"
  );

  return (
    <div>
      <Header />
      <Logo />
      <div>
        {icons.map((icon) => (
          <Icon variant={icon} />
        ))}
      </div>
      <Button
        variant="circle"
        onMouseEnter={() => {
          setIconUp("upFilledHover");
        }}
        onMouseLeave={() => {
          setIconUp("upFilled");
        }}
        onMouseDown={() => setIconUp("upFilled")}
        onMouseUp={() => setIconUp("upFilledHover")}
      >
        <Icon fontSize={30} variant={iconUp} />
      </Button>
      <Button variant="circle">
        <Icon fontSize={25} variant="chatFilled" />
      </Button>

      <Button disabled>Disabled</Button>
      <Button error>Error</Button>
      <Button>
        Button <Icon variant="arrowRightFilled" fontSize={15} />
      </Button>

      <Input error/>
      <Input placeholder="email" type="email"/>

      <Footer />
    </div>
  );
};
