import { useToggle } from "@/01.shared/hooks/useToggle";
import Avatar from "@/02.UI/Avatar/Avatar";
import Button from "@/02.UI/Button/Button";
import ModalActionsListBox from "@/02.UI/ModalActions/ModalActionsListBox/ModalActionsListBox";
import ModalActionsWrapper from "@/02.UI/ModalActions/ModalActionsWrapper/ModalActionsWrapper";
import Word from "@/02.UI/Word/Word";
import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import s from "./PostHeader.module.scss";
import { useDelayWithSelect } from "@/01.shared/hooks/useDelay";
import PostManageList from "../ManageList/PostManageList";
import { PostProps } from "@/01.shared/store/reducers/userWallReducer/userWall.interface";
import { displayName } from "@/01.shared/helpers/displayName";
import CustomLink from "@/02.UI/CustomLink/CustomLink";
import { getTime } from "@/01.shared/helpers/getTime";
interface PostHeaderProps {
  post: PostProps;
}

const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
  const isMenu = useToggle(false);
  const delay = useDelayWithSelect(200, isMenu);

  return (
    <div className={s.main}>
      <div className={s.left}>
        <Avatar size={3}>
          <div />
        </Avatar>
        <div className={s.info}>
          <CustomLink href={`/users/@${post.user.username}`}>
            {displayName(post.user)}
          </CustomLink>
          <Word>
            {getTime(post.createdAt)}{" "}
            {post.createdAt !== post.updatedAt && "(ред.)"}
          </Word>
        </div>
      </div>
      <ModalActionsWrapper {...delay}>
        <Button _flex onClick={isMenu.toggle}>
          <MdMoreHoriz size={24} color={"var(--accent-faded)"} />
        </Button>
        {isMenu.value && (
          <ModalActionsListBox>
            <PostManageList />
          </ModalActionsListBox>
        )}
      </ModalActionsWrapper>
    </div>
  );
};

export default PostHeader;
