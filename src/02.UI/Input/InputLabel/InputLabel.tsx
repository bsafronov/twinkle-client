import React from "react";
import Title from "../../Title/Title";
import s from "./InputLabel.module.scss";

interface InputLabelProps {
  children?: React.ReactNode;
  required?: boolean;
  optional?: boolean;
}

const InputLabel: React.FC<InputLabelProps> = props => {
  const { children, optional, required } = props;

  return (
    <Title>
      {children}{" "}
      {optional && <span className={s.optional}>(необязательно)</span>}
      {required && <span className={s.required}>*</span>}
    </Title>
  );
};

export default InputLabel;
