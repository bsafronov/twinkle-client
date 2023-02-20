import Box from "@/02.UI/Box/Box";
import Card from "@/02.UI/Card/Card";
import React from "react";
import s from "./ProfileHeader.module.scss";

import ProfileHeaderBackground from "@/03.components/ProfileHeader/Background/ProfileHeaderBackground";
import ProfileHeaderAvatar from "@/03.components/ProfileHeader/Avatar/ProfileHeaderAvatar";
import ProfileHeaderInfo from "@/03.components/ProfileHeader/Info/ProfileHeaderInfo";
import ProfileHeaderButtons from "@/03.components/ProfileHeader/Buttons/ProfileHeaderButtons";
import { useAppSelector } from "@/01.shared/hooks/redux";

interface ProfileHeaderProps {}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({}) => {
  const { isAuth } = useAppSelector(state => state.user);
  return (
    <Card>
      <div className={s.main}>
        <ProfileHeaderBackground />
        <div className={s.content}>
          <Box>
            <div className={s.content_inner}>
              <ProfileHeaderAvatar />
              <div className={s.content_info}>
                <ProfileHeaderInfo />
                {isAuth && <ProfileHeaderButtons />}
              </div>
            </div>
          </Box>
        </div>
      </div>
    </Card>
  );
};

export default ProfileHeader;
