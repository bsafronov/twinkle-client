import Avatar from "@/02.UI/Avatar/Avatar";
import Box from "@/02.UI/Box/Box";
import Button from "@/02.UI/Button/Button";
import Textarea from "@/02.UI/Textarea/Textarea";
import React from "react";
import s from "./PostCommentForm.module.scss";
import { IoSend } from "react-icons/io5";
interface PostCommentFormProps {}

const PostCommentForm: React.FC<PostCommentFormProps> = ({}) => {
  return (
    <Box>
      <div className={s.main}>
        <div className={s.left}>
          <div className={s.avatar_wrapper}>
            <Avatar>
              <div />
            </Avatar>
          </div>
          <div className={s.text_wrapper}>
            <Textarea placeholder="Написать комментарий..." />
          </div>
        </div>
        <div className={s.send}>
          <Button _flex>
            <IoSend size={20} color={"var(--accent-faded)"} />
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default PostCommentForm;
