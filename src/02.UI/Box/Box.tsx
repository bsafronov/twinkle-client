import React from "react";
import s from "./Box.module.scss";

interface BoxProps {
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return <div className={s.main}>{children}</div>;
};

export default Box;
