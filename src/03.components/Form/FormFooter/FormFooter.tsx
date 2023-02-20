import Box from "@/02.UI/Box/Box";
import Subtext from "@/02.UI/Subtext/Subtext";
import React from "react";
import s from "./FormFooter.module.scss";

interface FormFooterProps {
  children?: React.ReactNode;
}

const FormFooter: React.FC<FormFooterProps> = ({ children }) => {
  return (
    <div className={s.main}>
      <Box>
        <div className={s.inner}>
          <Subtext>{children}</Subtext>
        </div>
      </Box>
    </div>
  );
};

export default FormFooter;
