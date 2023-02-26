import Box from "@/02.UI/Box/Box";
import React from "react";
import s from "./FormBody.module.scss";

interface FormBodyProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

const FormBody: React.FC<FormBodyProps> = ({
  children,
  className,
  onSubmit,
  ...rest
}) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onSubmit && onSubmit(e);
  }

  return (
    <Box>
      <form onSubmit={e => handleSubmit(e)} {...rest} className={s.main}>
        {children}
      </form>
    </Box>
  );
};

export default FormBody;
