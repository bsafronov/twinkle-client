export interface UserWallState {
  id: number | null;
  owner: UserProps | null;
  posts: PostProps[];
}

export interface UserProps {
  createdAt: string;
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
}

export interface PostProps {
  id: number;
  createdAt: string;
  updatedAt: string;
  user: UserProps;
  content: PostContentProps[];
  comments: PostCommentProps[];
  likes: PostLikeProps[];
}

interface PostCommentProps {
  user: UserProps;
  desc: string;
}

interface PostLikeProps {
  user: UserProps;
}

interface PostContentProps {
  id: number;
  desc: string;
}
