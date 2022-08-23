import React from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

interface IInputProps {
  placeholder?: string;
  type?: "email" | "text";
  required?: boolean;
  error?: boolean;
}

export const Input: React.FC<IInputProps> = ({
  placeholder = "",
  type = "text",
  required = false,
  error = false,
}) => {
  const inputClassName = cn(styles.input, error ? styles.error : "");
  return (
    <input
      className={inputClassName}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  );
};
