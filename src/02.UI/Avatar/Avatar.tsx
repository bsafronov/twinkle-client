import clsx from "clsx";
import React from "react";
import s from "./Avatar.module.scss";

interface AvatarProps {
  children?: React.ReactNode;
  size?: 2 | 3 | 4 | 5;
}

const Avatar: React.FC<AvatarProps> = ({ size, children }) => {
  return (
    <div
      className={clsx(s.main, {
        [s.s]: size === 2,
        [s.m]: size === 3,
        [s.l]: size === 4,
        [s.xl]: size === 5,
      })}
    >
      {children}
    </div>
  );
};

export default Avatar;
