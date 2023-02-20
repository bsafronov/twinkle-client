import Button from "@/02.UI/Button/Button";
import CustomLink from "@/02.UI/CustomLink/CustomLink";
import Separator from "@/02.UI/Separator/Separator";
import Title from "@/02.UI/Title/Title";
import React from "react";
import s from "./RegistrationForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  RegistrationFieldsNames,
  registrationFieldsSchema,
} from "./RegistrationFields";
import { yupResolver } from "@hookform/resolvers/yup";

import InputBox from "@/02.UI/Input/InputBox/InputBox";
import InputLabel from "@/02.UI/Input/InputLabel/InputLabel";
import Input from "@/02.UI/Input/index/Input";
import InputMessage from "@/02.UI/Input/InputMessage/InputMessage";
import { useRouter } from "next/router";
import FormWrapper from "@/03.components/Form/FormWrapper/FormWrapper";
import FormHeader from "@/03.components/Form/FormHeader/FormHeader";
import Subtext from "@/02.UI/Subtext/Subtext";
import FormBody from "@/03.components/Form/FormBody/FormBody";
import FormFooter from "@/03.components/Form/FormFooter/FormFooter";

interface RegistrationFormProps {}

const RegistrationForm: React.FC<RegistrationFormProps> = ({}) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFieldsNames>({
    mode: "onChange",
    resolver: yupResolver(registrationFieldsSchema),
  });

  const onSubmit: SubmitHandler<RegistrationFieldsNames> = data =>
    console.log(data);

  return (
    <FormWrapper>
      <FormHeader>
        <Title size={3}>Регистрация</Title>
        <Subtext>
          <span>Есть аккаунт? </span>
          <CustomLink onClick={() => router.push("/login")}>Войти</CustomLink>
        </Subtext>
      </FormHeader>
      <Separator border />
      <FormBody onSubmit={handleSubmit(onSubmit)}>
        <div className={s.fields}>
          <InputBox>
            <InputLabel required>Почта</InputLabel>
            <Input
              placeholder="ivanov@mail.ru"
              type={"email"}
              {...register("email")}
            />
            {errors.email && (
              <InputMessage error>{errors.email.message}</InputMessage>
            )}
          </InputBox>
          <InputBox>
            <InputLabel optional>Логин</InputLabel>
            <Input
              placeholder="ivanov"
              type={"text"}
              {...register("username")}
            />
            {errors.username && (
              <InputMessage error>{errors.username.message}</InputMessage>
            )}
          </InputBox>
          <InputBox>
            <InputLabel required>Имя</InputLabel>
            <Input
              placeholder="Иван"
              type={"text"}
              {...register("firstName")}
            />
            {errors.firstName && (
              <InputMessage error>{errors.firstName.message}</InputMessage>
            )}
          </InputBox>
          <InputBox>
            <InputLabel required>Фамилия</InputLabel>
            <Input
              placeholder="Иванов"
              type={"text"}
              {...register("lastName")}
            />
            {errors.lastName && (
              <InputMessage error>{errors.lastName.message}</InputMessage>
            )}
          </InputBox>
          <InputBox>
            <InputLabel required>Пароль</InputLabel>
            <Input type={"password"} {...register("password")} />
            {errors.password && (
              <InputMessage error>{errors.password.message}</InputMessage>
            )}
          </InputBox>
          <InputBox>
            <InputLabel required>Подтверждение пароля</InputLabel>
            <Input type={"password"} {...register("passwordConfirm")} />
            {errors.passwordConfirm && (
              <InputMessage error>
                {errors.passwordConfirm.message}
              </InputMessage>
            )}
          </InputBox>
          <InputBox>
            <InputLabel optional>Возраст</InputLabel>
            <Input type={"number"} {...register("age")} />
            {errors.age && (
              <InputMessage error>{errors.age.message}</InputMessage>
            )}
          </InputBox>
        </div>
        <Button _variant="link">Зарегистрироваться</Button>
      </FormBody>
      <Separator border />
      <FormFooter>
        <CustomLink>Условия и соглашения</CustomLink>
      </FormFooter>
    </FormWrapper>
  );
};

export default RegistrationForm;
