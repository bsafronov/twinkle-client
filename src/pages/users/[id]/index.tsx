import { useAppDispatch, useAppSelector } from "@/01.shared/hooks/redux";
import $api from "@/01.shared/http";
import { userSlice } from "@/01.shared/store/reducers/userReducer/userSlice";
import { UserWallState } from "@/01.shared/store/reducers/userWallReducer/userWall.interface";
import { userWallSlice } from "@/01.shared/store/reducers/userWallReducer/userWallSlice";
import { wrapper } from "@/01.shared/store/store";
import Box from "@/02.UI/Box/Box";
import Card from "@/02.UI/Card/Card";
import Title from "@/02.UI/Title/Title";
import ContentAddSide from "@/03.components/Containers/ContentAddSide/ContentAddSide";
import ContentMainSide from "@/03.components/Containers/ContentMainSide/ContentMainSide";
import ContentSplitter from "@/03.components/Containers/ContentSplitter/ContentSplitter";
import MainLayout from "@/04.widgets/Layouts/MainLayout/MainLayout";
import Post from "@/04.widgets/Post/Post";
import PostForm from "@/04.widgets/PostForm/PostForm";
import PostList from "@/04.widgets/PostList/PostList";
import ProfileHeader from "@/04.widgets/ProfileHeader/ProfileHeader";
import SubsShortList from "@/04.widgets/SubsShortList/SubsShortList";
import TestWidget from "@/04.widgets/TestWidget/TestWidget";
import { NextPage } from "next";
import React, { useEffect } from "react";

interface ProfilePageProps {
  data: UserWallState;
}

const ProfilePage: NextPage<ProfilePageProps> = ({ data }) => {
  const { setUserWall } = userWallSlice.actions;
  const { id } = useAppSelector(state => state.userWall);
  const dispatch = useAppDispatch();
  console.log(data);

  useEffect(() => {
    if (data.id !== id) {
      dispatch(setUserWall({ ...data }));
    }
  }, [data]);

  if (!data) {
    return (
      <MainLayout>
        <Card>
          <Box>
            <Title size={3}>Такого пользователя не существует</Title>
          </Box>
        </Card>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <ProfileHeader />
      <ContentSplitter>
        <ContentMainSide>
          <PostForm />
          <PostList />
        </ContentMainSide>
        <ContentAddSide>
          <SubsShortList />
          <TestWidget />
        </ContentAddSide>
      </ContentSplitter>
    </MainLayout>
  );
};

export default ProfilePage;

export const getServerSideProps = async (context: any) => {
  const user: string = context.params.id.slice(1);

  const { data } = await $api.get("wall/" + user);

  return {
    props: {
      data: data,
    },
  };
};
