import React from "react";
import s from "./ModalActionsListBox.module.scss";

interface ModalActionsListProps {
  children?: React.ReactNode;
}

const ModalActionsListBox: React.FC<ModalActionsListProps> = ({ children }) => {
  return <div className={s.main}>{children}</div>;
};

export default ModalActionsListBox;
