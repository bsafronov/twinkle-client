import Button from "@/02.UI/Button/Button";
import React from "react";
import { HiChevronDown } from "react-icons/hi";
import s from "./ProfileHeaderButtons.module.scss";

interface ProfileHeaderButtonsProps {}

const ProfileHeaderButtons: React.FC<ProfileHeaderButtonsProps> = ({}) => {
  return (
    <div className={s.main}>
      <Button _variant="solid">Редактировать профиль</Button>
      <Button _flex _variant="solid">
        <span>Ещё</span>
        <HiChevronDown size={16} />
      </Button>
    </div>
  );
};

export default ProfileHeaderButtons;
