import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

interface IButtonProps {
  children: React.ReactNode;
  variant?: "circle" | "default" | "text-right-arrow" | "text-left-arrow";
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseUp?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  error?: boolean;
  type?: "submit" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  disabled = false,
  error = false,
  type = "button",
  variant = "default",
  ...props
}) => {
  const buttonClassName = cn(
    styles.button,
    styles[variant],
    disabled ? styles.disabled : "",
    error ? styles.error : ""
  );
  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClassName}
      {...props}
    >
      {children}
    </button>
  );
};
