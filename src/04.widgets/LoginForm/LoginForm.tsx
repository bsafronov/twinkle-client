import Box from "@/02.UI/Box/Box";
import Button from "@/02.UI/Button/Button";
import CustomLink from "@/02.UI/CustomLink/CustomLink";
import Input from "@/02.UI/Input/index/Input";
import InputBox from "@/02.UI/Input/InputBox/InputBox";
import InputLabel from "@/02.UI/Input/InputLabel/InputLabel";
import Separator from "@/02.UI/Separator/Separator";
import Subtext from "@/02.UI/Subtext/Subtext";
import Title from "@/02.UI/Title/Title";
import FormBody from "@/03.components/Form/FormBody/FormBody";
import FormHeader from "@/03.components/Form/FormHeader/FormHeader";
import FormWrapper from "@/03.components/Form/FormWrapper/FormWrapper";
import { useRouter } from "next/router";
import React from "react";
import s from "./LoginForm.module.scss";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const router = useRouter();

  return (
    <FormWrapper>
      <FormHeader>
        <Title size={3}>Авторизация</Title>
        <Subtext>
          <span>Нет аккаунта? </span>
          <CustomLink onClick={() => router.push("/registration")}>
            Регистрация
          </CustomLink>
        </Subtext>
      </FormHeader>
      <Separator border />
      <FormBody>
        <div className={s.fields}>
          <InputBox>
            <InputLabel required>Почта</InputLabel>
            <Input type={"email"} />
          </InputBox>
          <InputBox>
            <InputLabel required>Пароль</InputLabel>
            <Input type={"password"} />
          </InputBox>
        </div>
        <Button _variant="link">Войти</Button>
      </FormBody>
    </FormWrapper>
  );
};

export default LoginForm;
