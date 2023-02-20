import React from "react";
import s from "./Subtext.module.scss";

interface SubtextProps {
  children?: React.ReactNode;
}

const Subtext: React.FC<SubtextProps> = ({ children }) => {
  return <p className={s.main}>{children}</p>;
};

export default Subtext;
