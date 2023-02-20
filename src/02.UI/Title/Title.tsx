import clsx from "clsx";
import React from "react";
import s from "./Title.module.scss";

interface TitleProps {
  size?: 1 | 2 | 3;
  children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ size, children }) => {
  if (size === 2) {
    return <h3 className={clsx(s.main, s.medium)}>{children}</h3>;
  }

  if (size === 3) {
    return <h4 className={clsx(s.main, s.large)}>{children}</h4>;
  }

  return <h5 className={clsx(s.main, s.small)}>{children}</h5>;
};

export default Title;
