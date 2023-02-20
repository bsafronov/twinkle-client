import Avatar from "@/02.UI/Avatar/Avatar";
import React from "react";
import s from "./ProfileHeaderAvatar.module.scss";

const ProfileHeaderAvatar = () => {
  return (
    <div className={s.main}>
      <Avatar size={5}>
        <div />
      </Avatar>
    </div>
  );
};

export default ProfileHeaderAvatar;
