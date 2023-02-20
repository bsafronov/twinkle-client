import React from "react";
import s from "./ContentWrapper.module.scss";
interface ContentWrapperProps {
  children?: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return <div className={s.main}>{children}</div>;
};

export default ContentWrapper;
