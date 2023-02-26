import { useAppDispatch, useAppSelector } from "@/01.shared/hooks/redux";
import { useInput } from "@/01.shared/hooks/useInput";
import { AuthService } from "@/01.shared/services/AuthService/AuthService";
import { LoginUserDTO } from "@/01.shared/services/AuthService/AuthService.interface";
import { userSlice } from "@/01.shared/store/reducers/userReducer/userSlice";
import Button from "@/02.UI/Button/Button";
import CustomLink from "@/02.UI/CustomLink/CustomLink";
import Input from "@/02.UI/Input/index/Input";
import InputBox from "@/02.UI/Input/InputBox/InputBox";
import InputLabel from "@/02.UI/Input/InputLabel/InputLabel";
import InputMessage from "@/02.UI/Input/InputMessage/InputMessage";

import Word from "@/02.UI/Word/Word";
import FormBody from "@/03.components/Form/FormBody/FormBody";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import s from "./SideLoginForm.module.scss";

interface LoginFormProps {}

const SideLoginForm: React.FC<LoginFormProps> = ({}) => {
  const [apiError, setApiError] = useState("");
  const { login } = userSlice.actions;
  const dispatch = useAppDispatch();
  const loginInput = useInput("");
  const passwordInput = useInput("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const request: LoginUserDTO = {
        login: loginInput.value,
        password: passwordInput.value,
      };

      const response = await AuthService.login(request);
      dispatch(login(response));
    } catch (e: unknown | AxiosError) {
      if (axios.isAxiosError(e)) {
        console.log(e);
        setApiError(e.response?.data.message);
      }
    }
  }

  return (
    <form className={s.main} onSubmit={handleLogin}>
      <div className={s.field}>
        <InputBox>
          <InputLabel required>
            <span>Почта </span> <Word>или логин</Word>
          </InputLabel>
          <Input type={"text"} {...loginInput} />
        </InputBox>
        <InputBox>
          <InputLabel required>Пароль</InputLabel>
          <Input type={"password"} {...passwordInput} />
        </InputBox>
      </div>
      {apiError && <InputMessage error>{apiError}</InputMessage>}
      <Button _variant="solid">Войти</Button>
      <CustomLink className={s.redirect} href={"/registration"} small>
        Регистрация
      </CustomLink>
    </form>
  );
};

export default SideLoginForm;
