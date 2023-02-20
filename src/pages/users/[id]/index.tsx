import ContentAddSide from "@/03.components/Containers/ContentAddSide/ContentAddSide";
import ContentMainSide from "@/03.components/Containers/ContentMainSide/ContentMainSide";
import ContentSplitter from "@/03.components/Containers/ContentSplitter/ContentSplitter";
import MainLayout from "@/04.widgets/Layouts/MainLayout/MainLayout";
import Post from "@/04.widgets/Post/Post";
import PostForm from "@/04.widgets/PostForm/PostForm";
import ProfileHeader from "@/04.widgets/ProfileHeader/ProfileHeader";
import SubsShortList from "@/04.widgets/SubsShortList/SubsShortList";
import TestWidget from "@/04.widgets/TestWidget/TestWidget";
import React from "react";

const ProfilePage = () => {
  return (
    <MainLayout>
      <ProfileHeader />
      <ContentSplitter>
        <ContentMainSide>
          <PostForm />
          <Post />
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
