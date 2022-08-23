import React from "react";
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
  return (
    <input
      className={styles.input + " " + (error ? styles.error : "")}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  );
};
