import { useAppSelector } from "@/01.shared/hooks/redux";
import ContentWrapper from "@/03.components/Containers/ContentWrapper/ContentWrapper";
import Navbar from "@/04.widgets/Navbar/Navbar";
import SideLoginForm from "@/04.widgets/SideLoginForm/SideLoginForm";
import React from "react";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isAuth } = useAppSelector(state => state.user);

  return (
    <>
      {isAuth ? <Navbar /> : <SideLoginForm />}
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

export default MainLayout;
