import Box from "@/02.UI/Box/Box";
import React from "react";
import PostCommentItem from "../CommentItem/PostCommentItem";
import s from "./PostCommentBox.module.scss";

interface PostCommentBoxProps {}

const PostCommentBox: React.FC<PostCommentBoxProps> = ({}) => {
  return (
    <Box>
      <div className={s.main}>
        <PostCommentItem />
        <PostCommentItem />
      </div>
    </Box>
  );
};

export default PostCommentBox;
