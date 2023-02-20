import React from "react";
import s from "./ContentMainSide.module.scss";

interface ContentMainSideProps {
  children?: React.ReactNode;
}

const ContentMainSide: React.FC<ContentMainSideProps> = ({ children }) => {
  return <div className={s.main}>{children}</div>;
};

export default ContentMainSide;
