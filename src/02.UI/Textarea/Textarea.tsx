import React, { ChangeEvent, useEffect, useRef } from "react";
import { FieldMethods } from "./helpers";
import s from "./Textarea.module.scss";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = props => {
  const { children, onBlur, onChange, ...rest } = props;

  function handleOnBlur(e: React.FocusEvent<HTMLTextAreaElement>) {
    FieldMethods.removeSpaces(e);
    onBlur && onBlur(e);
  }

  function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    FieldMethods.setInputHeight(e);
    onChange && onChange(e);
  }
  return (
    <textarea
      {...rest}
      onBlur={e => handleOnBlur(e)}
      onChange={e => handleOnChange(e)}
      className={s.main}
    />
  );
};

export default Textarea;
