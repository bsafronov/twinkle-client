import { useAppSelector } from "@/01.shared/hooks/redux";
import React from "react";
import Post from "../Post/Post";
import s from "./PostList.module.scss";

interface PostListProps {}

const PostList: React.FC<PostListProps> = () => {
  const { posts } = useAppSelector(state => state.userWall);
  return (
    <ul className={s.main}>
      {posts?.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
