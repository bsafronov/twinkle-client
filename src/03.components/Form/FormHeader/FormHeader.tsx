import Box from "@/02.UI/Box/Box";
import React from "react";
import s from "./FormHeader.module.scss";

interface FormHeaderProps {
  children?: React.ReactNode;
}

const FormHeader: React.FC<FormHeaderProps> = ({ children }) => {
  return (
    <div className={s.main}>
      <Box>
        <div className={s.inner}>{children}</div>
      </Box>
    </div>
  );
};

export default FormHeader;
