import { useTheme } from "@/01.shared/hooks/useTheme";
import MainWrapper from "@/03.components/Containers/MainWrapper/MainWrapper";
import Header from "@/04.widgets/Header/Header";
import React from "react";
import s from "./BaseLayout.module.scss";

interface BaseLayoutProps {
  children?: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  useTheme();

  return (
    <>
      <Header />
      <div className={s.main}>
        <MainWrapper>{children}</MainWrapper>
      </div>
    </>
  );
};

export default BaseLayout;
