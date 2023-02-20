import { useAppDispatch } from "@/01.shared/hooks/redux";
import { userSlice } from "@/01.shared/store/reducers/userReducer/userSlice";
import Button from "@/02.UI/Button/Button";
import Input from "@/02.UI/Input/index/Input";
import InputBox from "@/02.UI/Input/InputBox/InputBox";
import InputLabel from "@/02.UI/Input/InputLabel/InputLabel";

import Word from "@/02.UI/Word/Word";
import { useRouter } from "next/router";
import React from "react";
import s from "./SideLoginForm.module.scss";

interface LoginFormProps {}

const SideLoginForm: React.FC<LoginFormProps> = ({}) => {
  const router = useRouter();
  const { login } = userSlice.actions;
  const dispatch = useAppDispatch();

  function handleLogin(e: React.MouseEvent) {
    e.preventDefault();
    dispatch(login());
  }
  return (
    <form className={s.main}>
      <InputBox>
        <InputLabel>
          <span>Почта</span> <Word>или логин</Word>
        </InputLabel>
        <Input type={"text"} />
      </InputBox>
      <InputBox>
        <InputLabel>Пароль</InputLabel>
        <Input type={"password"} />
      </InputBox>
      <Button type="submit" _variant="solid" onClick={handleLogin}>
        Войти
      </Button>
      <a className={s.redirect} onClick={() => router.push("/registration")}>
        Регистрация
      </a>
    </form>
  );
};

export default SideLoginForm;
