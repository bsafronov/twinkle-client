import React from "react";
import s from "./ProfileHeaderBackground.module.scss";
const ProfileHeaderBackground = () => {
  return (
    <div
      className={s.main}
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(133,66,66,1) 0%, rgba(32,110,115,1) 100%)",
      }}
    />
  );
};

export default ProfileHeaderBackground;
