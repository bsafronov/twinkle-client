import React from "react";
import s from "./Card.module.scss";

interface CardProps {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={s.main}>{children}</div>;
};

export default Card;
