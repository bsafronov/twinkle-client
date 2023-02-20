import clsx from "clsx";
import React from "react";
import s from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  _variant?: "solid" | "outlined" | "link";
  _flex?: boolean;
  _color?: "primary" | "add";
}

const Button: React.FC<ButtonProps> = props => {
  const { children, _color, _variant, _flex, ...rest } = props;
  return (
    <button
      {...rest}
      className={clsx(s.main, {
        [s.default]: !_variant,
        [s.solid]: _variant === "solid",
        [s.outlined]: _variant === "outlined",
        [s.link]: _variant === "link",
        [s.flex]: _flex,
        [s.primary]: _color === "primary",
        [s.add]: _color === "add" || !_color,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
