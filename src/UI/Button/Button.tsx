import React from "react";
import s from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  variant?: "circle" | "default";
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseUp?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  error?: boolean;
  type?: "submit" | "button";
}

export const Button: React.FC<Props> = ({
  children,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  disabled = false,
  error = false,
  type = "button",
  variant = "default",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={
        s.button +
        " " +
        s[variant] +
        " " +
        (disabled ? s.disabled : "") +
        " " +
        (error ? s.error : "")
      }
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};
