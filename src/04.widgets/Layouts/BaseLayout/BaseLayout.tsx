import { useAppDispatch } from "@/01.shared/hooks/redux";
import { useTheme } from "@/01.shared/hooks/useTheme";
import { AuthService } from "@/01.shared/services/AuthService/AuthService";
import { IToken } from "@/01.shared/services/AuthService/AuthService.interface";
import { userSlice } from "@/01.shared/store/reducers/userReducer/userSlice";
import MainWrapper from "@/03.components/Containers/MainWrapper/MainWrapper";
import Header from "@/04.widgets/Header/Header";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import s from "./BaseLayout.module.scss";

interface BaseLayoutProps {
  children?: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  useTheme();
  const { login } = userSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();

  async function handleCheckAuth() {
    return await AuthService.checkAuth();
  }

  function handleJwtData(token: string) {
    const tokenData: IToken = jwtDecode(token);
    return tokenData;
  }

  function handleRedirect() {
    if (router.pathname.startsWith("/users/[id]/")) {
      router.push("/login");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      handleCheckAuth()
        .then(() => dispatch(login(handleJwtData(token))))
        .catch(() => router.push("/login"));
    } else {
      handleRedirect();
    }
  }, []);

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
