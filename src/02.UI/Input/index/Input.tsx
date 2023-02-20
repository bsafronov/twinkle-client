import clsx from "clsx";
import React from "react";
import s from "./Input.module.scss";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { icon, ...rest } = props;

  const input = (
    <input
      ref={ref}
      className={clsx(s.main, {
        [s.iconic]: icon,
        [s.outline]: !icon,
      })}
      {...rest}
    />
  );

  if (icon) {
    return (
      <div className={s.wrapper}>
        {icon}
        {input}
      </div>
    );
  }

  return input;
});

export default Input;
