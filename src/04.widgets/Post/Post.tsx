import Box from "@/02.UI/Box/Box";
import Card from "@/02.UI/Card/Card";
import s from "./Post.module.scss";
import PostImageBox from "@/03.components/Post/ImageBox/PostImageBox";
import PostTextBox from "@/03.components/Post/TextBox/PostTextBox";
import PostHeader from "@/03.components/Post/Header/PostHeader";
import Button from "@/02.UI/Button/Button";
import { HiEye, HiHeart } from "react-icons/hi";
import { HiChatBubbleLeft } from "react-icons/hi2";
import Word from "@/02.UI/Word/Word";
import { useToggle } from "@/01.shared/hooks/useToggle";
import Separator from "@/02.UI/Separator/Separator";
import Avatar from "@/02.UI/Avatar/Avatar";
import PostCommentBox from "@/03.components/Post/CommentBox/PostCommentBox";
import PostCommentForm from "@/03.components/Post/CommentForm/PostCommentForm";
import { useAppSelector } from "@/01.shared/hooks/redux";

const Post = () => {
  const comments = useToggle(false);
  const { isAuth } = useAppSelector(state => state.user);

  return (
    <Card>
      <Box>
        <div className={s.main}>
          <PostHeader />
          <div className={s.content}>
            <PostTextBox />
            <PostImageBox />
          </div>
          <div className={s.content_actions}>
            <div className={s.buttons}>
              <Button _flex>
                <HiHeart size={20} />
                <Word>10</Word>
              </Button>
              <Button _flex onClick={() => comments.toggle()}>
                <HiChatBubbleLeft
                  size={20}
                  color={comments.value ? "var(--accent-blue)" : "inherit"}
                />
                <Word>5</Word>
              </Button>
            </div>
            <div className={s.seen}>
              <Word>10</Word>
              <HiEye size={12} color={"var(--accent-faded)"} />
            </div>
          </div>
        </div>
      </Box>
      {comments.value && (
        <>
          <Separator />
          <PostCommentBox />
        </>
      )}
      <Separator />
      {isAuth && <PostCommentForm />}
    </Card>
  );
};

export default Post;
