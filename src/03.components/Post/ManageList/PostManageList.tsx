import Button from "@/02.UI/Button/Button";
import React from "react";
import { HiTrash } from "react-icons/hi";
import s from "./PostManageList.module.scss";

interface PostManageListProps {}

const PostManageList: React.FC<PostManageListProps> = ({}) => {
  return (
    <ul className={s.main}>
      <li>
        <Button _flex className={s.action}>
          <HiTrash color="#FF0000" size={20} />
          <span className={s.red}>Удалить</span>
        </Button>
      </li>
    </ul>
  );
};

export default PostManageList;
