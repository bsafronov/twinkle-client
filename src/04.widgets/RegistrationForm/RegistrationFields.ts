import * as yup from "yup";

export const registrationFieldsSchema = yup.object().shape({
  email: yup
    .string()
    .required("Введите почту")
    .matches(
      /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/,
      "Email не валиден"
    ),
  password: yup.string().required("Введите пароль").min(5, "Слишком короткий"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают"),
  firstName: yup
    .string()
    .required("Введите имя")
    .matches(/^[a-zа-яё]+$/i, "Имя не может иметь цифр"),
  lastName: yup
    .string()
    .required("Введите фамилию")
    .matches(/^[a-zа-яё]+$/i, "Фамилия не может иметь цифр"),
  username: yup
    .string()
    .transform((value, originalValue) => {
      if (!value) {
        return null;
      }
      return originalValue;
    })
    .optional()
    .nullable()
    .matches(/[A-Za-z]+/, "Должно содержать латиницу"),
  age: yup
    .string()
    .transform((value, originalValue) => {
      if (!value) {
        return null;
      }
      return originalValue;
    })
    .optional()
    .nullable()
    .min(1, "Некорректный возраст")
    .max(100, "Некорректный возраст"),
});

export interface RegistrationFieldsNames {
  email: string;
  password: string;
  passwordConfirm: string;
  firstName: string;
  lastName: string;
  username: string;
  age: string;
}
