import { CreateUserDTO } from "@/01.shared/services/AuthService/AuthService.interface";
import * as yup from "yup";

export const registrationFieldsSchema = yup.object().shape({
  email: yup
    .string()
    .required("Введите почту")
    .matches(
      /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/,
      "Email не валиден"
    )
    .trim(),
  password: yup
    .string()
    .required("Введите пароль")
    .min(5, "Слишком короткий")
    .trim(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .trim(),
  firstName: yup
    .string()
    .transform((value, originalValue) => {
      if (!value) {
        return null;
      }
      return originalValue;
    })
    .optional()
    .nullable()
    .matches(/^[a-zа-яё]+$/i, "Имя не может иметь цифр")
    .trim(),
  lastName: yup
    .string()
    .transform((value, originalValue) => {
      if (!value) {
        return null;
      }
      return originalValue;
    })
    .optional()
    .nullable()
    .matches(/^[a-zа-яё]+$/i, "Фамилия не может иметь цифр")
    .trim(),
  username: yup
    .string()
    .required("Введите логин")
    .matches(/[a-z]{1,}[0-9]*/i, "Только латиница / и цифры")
    .min(3, "Не менее 3 символов")
    .max(20, "Не более 20 символов")
    .transform(value => value && value.toLowerCase())
    .trim(),
  age: yup
    .number()
    .transform((value, originalValue) => {
      if (!value) {
        return null;
      }
      return parseInt(originalValue);
    })
    .optional()
    .nullable()
    .min(4, "Некорректный возраст")
    .max(100, "Некорректный возраст"),
});

export interface RegistrationFieldsNames extends CreateUserDTO {
  passwordConfirm: string;
}
