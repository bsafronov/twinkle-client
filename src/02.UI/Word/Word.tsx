import clsx from "clsx";
import React from "react";
import s from "./Word.module.scss";

interface WordProps {
  children?: React.ReactNode;
  mw?: number;
}

const Word: React.FC<WordProps> = ({ mw, children }) => {
  return <span className={clsx(s.main)}>{children}</span>;
};

export default Word;
