import React from "react";
import s from "./FormWrapper.module.scss";

interface FormWrapperProps {
  children?: React.ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
  return <div className={s.main}>{children}</div>;
};

export default FormWrapper;
