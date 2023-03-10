import Button from "@/02.UI/Button/Button";
import CustomLink from "@/02.UI/CustomLink/CustomLink";
import Separator from "@/02.UI/Separator/Separator";
import Title from "@/02.UI/Title/Title";
import React, { useState } from "react";
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
import { AuthService } from "@/01.shared/services/AuthService/AuthService";
import axios, { AxiosError } from "axios";
import { userSlice } from "@/01.shared/store/reducers/userReducer/userSlice";
import { useAppDispatch } from "@/01.shared/hooks/redux";
import { CreateUserDTO } from "@/01.shared/services/AuthService/AuthService.interface";

interface RegistrationFormProps {}

const RegistrationForm: React.FC<RegistrationFormProps> = ({}) => {
  const router = useRouter();
  const [apiError, setApiError] = useState<string>("");
  const { login } = userSlice.actions;
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFieldsNames>({
    mode: "onChange",
    resolver: yupResolver(registrationFieldsSchema),
  });

  const onSubmit: SubmitHandler<RegistrationFieldsNames> = async data => {
    try {
      const res = await AuthService.registration(data);

      router.push("/users/@" + res.user.username);
      dispatch(login(res));
    } catch (e: unknown | AxiosError) {
      if (axios.isAxiosError(e)) {
        setApiError(e.response?.data.message);
      }
    }
  };

  return (
    <FormWrapper>
      <FormHeader>
        <Title size={3}>??????????????????????</Title>
        <Subtext>
          <span>???????? ??????????????? </span>
          <CustomLink href="/login">??????????</CustomLink>
        </Subtext>
      </FormHeader>
      <Separator border />
      <FormBody onSubmit={handleSubmit(onSubmit)}>
        <div className={s.fields}>
          <InputBox>
            <InputLabel required>??????????</InputLabel>
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
            <InputLabel required>??????????</InputLabel>
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
            <InputLabel required>????????????</InputLabel>
            <Input type={"password"} {...register("password")} />
            {errors.password && (
              <InputMessage error>{errors.password.message}</InputMessage>
            )}
          </InputBox>
          <InputBox>
            <InputLabel required>?????????????????????????? ????????????</InputLabel>
            <Input type={"password"} {...register("passwordConfirm")} />
            {errors.passwordConfirm && (
              <InputMessage error>
                {errors.passwordConfirm.message}
              </InputMessage>
            )}
          </InputBox>
          <InputBox>
            <InputLabel optional>??????</InputLabel>
            <Input
              placeholder="????????"
              type={"text"}
              {...register("firstName")}
            />
            {errors.firstName && (
              <InputMessage error>{errors.firstName.message}</InputMessage>
            )}
          </InputBox>
          <InputBox>
            <InputLabel optional>??????????????</InputLabel>
            <Input
              placeholder="????????????"
              type={"text"}
              {...register("lastName")}
            />
            {errors.lastName && (
              <InputMessage error>{errors.lastName.message}</InputMessage>
            )}
          </InputBox>
          <InputBox>
            <InputLabel optional>??????????????</InputLabel>
            <Input type={"number"} {...register("age")} />
            {errors.age && (
              <InputMessage error>{errors.age.message}</InputMessage>
            )}
          </InputBox>
        </div>
        {apiError && <InputMessage error>{apiError}</InputMessage>}
        <Button _variant="link">????????????????????????????????????</Button>
      </FormBody>
      <Separator border />
      <FormFooter>
        <CustomLink href="/policy">?????????????? ?? ????????????????????</CustomLink>
      </FormFooter>
    </FormWrapper>
  );
};

export default RegistrationForm;
