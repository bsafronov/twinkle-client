import Box from "@/02.UI/Box/Box";
import React from "react";
import s from "./FormBody.module.scss";

interface FormBodyProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

const FormBody: React.FC<FormBodyProps> = ({ children, ...rest }) => {
  return (
    <Box>
      <form {...rest} className={s.main}>
        {children}
      </form>
    </Box>
  );
};

export default FormBody;
