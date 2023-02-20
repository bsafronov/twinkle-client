import React from "react";
import s from "./InputBox.module.scss";

interface InputBoxProps extends React.HTMLProps<HTMLDivElement> {}

const InputBox: React.FC<InputBoxProps> = ({ children }) => {
  return <div className={s.main}>{children}</div>;
};

export default InputBox;
