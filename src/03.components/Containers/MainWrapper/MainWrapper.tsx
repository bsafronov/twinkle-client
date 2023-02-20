import React from "react";
import s from "./MainWrapper.module.scss";

interface MainWrapperProps {
  children?: React.ReactNode;
}

const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  return <div className={s.main}>{children}</div>;
};

export default MainWrapper;
