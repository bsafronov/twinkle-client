import clsx from "clsx";
import Link from "next/link";
import React from "react";
import s from "./CustomLink.module.scss";

interface CustomLinkProps {
  small?: boolean;
  className?: string;
  children?: React.ReactNode;
  href?: string;
}

const CustomLink: React.FC<CustomLinkProps> = props => {
  const { children, href, className } = props;
  return (
    <Link className={clsx(s.main, className)} href={href ? href : "/"}>
      {children}
    </Link>
  );
};

export default CustomLink;
