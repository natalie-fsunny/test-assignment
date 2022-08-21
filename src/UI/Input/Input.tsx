import React from "react";
import s from "./Input.module.scss";

interface Props {
  placeholder?: string;
  type?: "email" | "text";
  required?: boolean;
  error?: boolean;
}

export const Input: React.FC<Props> = ({
  placeholder = "",
  type = "text",
  required = false,
  error = false,
}) => {
  return (
    <input
      className={s.input + " " + (error ? s.error : "")}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  );
};
