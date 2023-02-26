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
import PostCommentBox from "@/03.components/Post/CommentBox/PostCommentBox";
import PostCommentForm from "@/03.components/Post/CommentForm/PostCommentForm";
import { useAppSelector } from "@/01.shared/hooks/redux";
import { FC, useEffect, useState } from "react";
import { PostProps } from "@/01.shared/store/reducers/userWallReducer/userWall.interface";

interface IPostProps {
  post: PostProps;
}

const Post: FC<IPostProps> = ({ post }) => {
  const comments = useToggle(false);
  const { isAuth } = useAppSelector(state => state.user);
  const [text, setText] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [audios, setAudios] = useState<string[]>([]);

  function sortContent() {
    setText("");
    setImages([]);
    setAudios([]);

    post.content.map(el => {
      if (el.desc.startsWith("image")) {
        return setImages(prev => [...prev, el.desc]);
      }

      if (el.desc.startsWith("audio")) {
        return setAudios(prev => [...prev, el.desc]);
      }

      return setText(el.desc);
    });
  }

  useEffect(() => {
    sortContent();
  }, [post]);

  return (
    <Card>
      <Box>
        <div className={s.main}>
          <PostHeader post={post} />
          <div className={s.content}>
            {text && <PostTextBox text={text} />}
            {images.length > 0 && <PostImageBox images={images} />}
          </div>
          <div className={s.content_actions}>
            <div className={s.buttons}>
              <Button _flex>
                <HiHeart size={20} />
                {post.comments.length > 0 && (
                  <Word>{post.comments.length}</Word>
                )}
              </Button>
              <Button _flex onClick={() => comments.toggle()}>
                <HiChatBubbleLeft
                  size={20}
                  color={comments.value ? "var(--accent-blue)" : "inherit"}
                />
                {post.likes.length > 0 && <Word>{post.likes.length}</Word>}
              </Button>
            </div>
            {/* <div className={s.seen}>
              <Word>10</Word>
              <HiEye size={12} color={"var(--accent-faded)"} />
            </div> */}
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
