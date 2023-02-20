import { useToggle } from "@/01.shared/hooks/useToggle";
import Avatar from "@/02.UI/Avatar/Avatar";
import Button from "@/02.UI/Button/Button";
import ModalActionsListBox from "@/02.UI/ModalActions/ModalActionsListBox/ModalActionsListBox";
import ModalActionsWrapper from "@/02.UI/ModalActions/ModalActionsWrapper/ModalActionsWrapper";
import ModalActionsBox from "@/02.UI/ModalActions/ModalActionsWrapper/ModalActionsWrapper";
import Word from "@/02.UI/Word/Word";
import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import s from "./PostHeader.module.scss";
import { useDelayWithSelect } from "@/01.shared/hooks/useDelay";
import PostManageList from "../ManageList/PostManageList";
interface PostHeaderProps {}

const PostHeader: React.FC<PostHeaderProps> = ({}) => {
  const isMenu = useToggle(false);
  const delay = useDelayWithSelect(200, isMenu);

  return (
    <div className={s.main}>
      <div className={s.left}>
        <Avatar size={3}>
          <div />
        </Avatar>
        <div className={s.info}>
          <span>Богдан Сафронов</span>
          <Word>16 янв 2022</Word>
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
