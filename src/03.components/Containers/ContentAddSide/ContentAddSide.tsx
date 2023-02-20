import React from "react";
import s from "./ContentAddSide.module.scss";

interface ContentAddSideProps {
  children?: React.ReactNode;
}

const ContentAddSide: React.FC<ContentAddSideProps> = ({ children }) => {
  return <div className={s.main}>{children}</div>;
};

export default ContentAddSide;
