import clsx from "clsx";
import React from "react";
import s from "./InputMessage.module.scss";

interface InputMessageProps {
  children?: React.ReactNode;
  error?: boolean;
}

const InputMessage: React.FC<InputMessageProps> = ({ children, error }) => {
  return (
    <p
      className={clsx(s.main, {
        [s.error]: error,
      })}
    >
      {children}
    </p>
  );
};

export default InputMessage;
