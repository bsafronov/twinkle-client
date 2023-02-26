import { useAppDispatch } from "@/01.shared/hooks/redux";
import { useInput } from "@/01.shared/hooks/useInput";
import { useRoutes } from "@/01.shared/routes";
import { AuthService } from "@/01.shared/services/AuthService/AuthService";
import { LoginUserDTO } from "@/01.shared/services/AuthService/AuthService.interface";
import { userSlice } from "@/01.shared/store/reducers/userReducer/userSlice";
import Box from "@/02.UI/Box/Box";
import Button from "@/02.UI/Button/Button";
import CustomLink from "@/02.UI/CustomLink/CustomLink";
import Input from "@/02.UI/Input/index/Input";
import InputBox from "@/02.UI/Input/InputBox/InputBox";
import InputLabel from "@/02.UI/Input/InputLabel/InputLabel";
import InputMessage from "@/02.UI/Input/InputMessage/InputMessage";
import Separator from "@/02.UI/Separator/Separator";
import Subtext from "@/02.UI/Subtext/Subtext";
import Title from "@/02.UI/Title/Title";
import Word from "@/02.UI/Word/Word";
import FormBody from "@/03.components/Form/FormBody/FormBody";
import FormHeader from "@/03.components/Form/FormHeader/FormHeader";
import FormWrapper from "@/03.components/Form/FormWrapper/FormWrapper";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import s from "./LoginForm.module.scss";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const router = useRouter();
  const [apiError, setApiError] = useState("");
  const { login } = userSlice.actions;
  const dispatch = useAppDispatch();
  const loginInput = useInput("");
  const passwordInput = useInput("");

  async function handleLogin() {
    try {
      const request: LoginUserDTO = {
        login: loginInput.value,
        password: passwordInput.value,
      };
      const token = await AuthService.login(request);

      dispatch(login(token));
      router.push("/users/@" + token.user.username);
    } catch (e: unknown | AxiosError) {
      if (axios.isAxiosError(e)) {
        setApiError(e.response?.data.message);
      }
    }
  }

  return (
    <FormWrapper>
      <FormHeader>
        <Title size={3}>Авторизация</Title>
        <Subtext>
          <span>Нет аккаунта? </span>
          <CustomLink href="/registration">Регистрация</CustomLink>
        </Subtext>
      </FormHeader>
      <Separator border />
      <FormBody onSubmit={handleLogin}>
        <div className={s.fields}>
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
        <Button
          _variant="link"
          disabled={!loginInput.value || !passwordInput.value}
        >
          Войти
        </Button>
      </FormBody>
    </FormWrapper>
  );
};

export default LoginForm;
