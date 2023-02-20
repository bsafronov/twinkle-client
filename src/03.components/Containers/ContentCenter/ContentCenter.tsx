import React from "react";
import s from "./ContentCenter.module.scss";

interface ContentCenterProps {
  children?: React.ReactNode;
}

const ContentCenter: React.FC<ContentCenterProps> = ({ children }) => {
  return <div className={s.main}>{children}</div>;
};

export default ContentCenter;
