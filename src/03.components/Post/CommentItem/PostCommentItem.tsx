import Avatar from "@/02.UI/Avatar/Avatar";
import Button from "@/02.UI/Button/Button";
import CustomLink from "@/02.UI/CustomLink/CustomLink";
import Separator from "@/02.UI/Separator/Separator";
import Word from "@/02.UI/Word/Word";
import React from "react";
import { HiHeart } from "react-icons/hi";
import s from "./PostCommentItem.module.scss";

interface PostCommentItemProps {}

const PostCommentItem: React.FC<PostCommentItemProps> = ({}) => {
  return (
    <div className={s.main}>
      <Avatar>
        <div />
      </Avatar>
      <div className={s.user}>
        <CustomLink href="/">Богдан Сафронов</CustomLink>
        <p>
          Спасибо за прекрасный контент! Очень рад, что имею возможность
          оставить здесь комментарий.
        </p>
        <div className={s.actions}>
          <div className={s.info}>
            <Word>16 янв в 6:36</Word>
            <Button>Ответить</Button>
          </div>
          <div className={s.likes}>
            <Button _flex>
              <HiHeart size={16} />
              <Word>2</Word>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCommentItem;
