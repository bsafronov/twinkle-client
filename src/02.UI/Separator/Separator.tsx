import clsx from "clsx";
import React from "react";
import s from "./Separator.module.scss";

interface SeparatorProps {
  border?: boolean;
}

const Separator: React.FC<SeparatorProps> = ({ border }) => {
  return (
    <hr
      className={clsx(s.main, {
        [s.border]: border,
      })}
    />
  );
};

export default Separator;
