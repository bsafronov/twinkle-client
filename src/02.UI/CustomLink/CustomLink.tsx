import clsx from "clsx";
import React from "react";
import s from "./CustomLink.module.scss";

interface CustomLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  small?: boolean;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  small,
  children,
  ...rest
}) => {
  return (
    <a
      {...rest}
      className={clsx(s.main, {
        [s.smaller]: small,
      })}
    >
      {children}
    </a>
  );
};

export default CustomLink;
