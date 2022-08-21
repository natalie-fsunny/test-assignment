import { Logo } from "../UI";
import { Icon } from "../UI/Icon";
import { icons } from "../UI/Icon/utils";
import s from "./ComponentsExample.module.scss";

export const ComponentsExample = () => {
  return (
    <div>
      <Logo />
      <div>
        {icons.map((icon) => (
          <Icon variant={icon} />
        ))}
      </div>
    </div>
  );
};
