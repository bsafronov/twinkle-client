import React from "react";
import s from "./PostTextBox.module.scss";

interface PostTextBoxProps {}

const PostTextBox: React.FC<PostTextBoxProps> = ({}) => {
  return (
    <p className={s.main}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, et, unde,
      quaerat asperiores deserunt tenetur doloribus officiis voluptas optio
      quasi ut nisi adipisci ea. Iure est quasi ratione incidunt accusamus.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, et, unde,
      quaerat asperiores deserunt tenetur doloribus officiis voluptas optio
      quasi ut nisi adipisci ea. Iure est quasi ratione incidunt accusamus.
    </p>
  );
};

export default PostTextBox;
