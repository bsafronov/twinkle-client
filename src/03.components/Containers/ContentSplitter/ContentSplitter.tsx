import React from "react";
import s from "./ContentSplitter.module.scss";

interface ContentSplitterProps {
  children?: React.ReactNode;
}

const ContentSplitter: React.FC<ContentSplitterProps> = ({ children }) => {
  return <div className={s.main}>{children}</div>;
};

export default ContentSplitter;
