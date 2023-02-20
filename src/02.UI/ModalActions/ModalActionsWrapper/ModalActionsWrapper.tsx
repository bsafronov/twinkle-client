import clsx from "clsx";
import React from "react";
import s from "./ModalActionsWrapper.module.scss";

interface ModalActionsBoxProps extends React.HTMLProps<HTMLDivElement> {}

const ModalActionsWrapper: React.FC<ModalActionsBoxProps> = props => {
  const { className, children, ...rest } = props;
  return (
    <div {...rest} className={clsx(s.main, className)}>
      {children}
    </div>
  );
};

export default ModalActionsWrapper;
