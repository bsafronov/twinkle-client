import CustomLink from "@/02.UI/CustomLink/CustomLink";
import React from "react";
import s from "./PostTextBox.module.scss";

interface PostTextBoxProps {
  text: string;
}

const PostTextBox: React.FC<PostTextBoxProps> = ({ text }) => {
  return <p className={s.main}>{text}</p>;
};

export default PostTextBox;
