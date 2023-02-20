import Avatar from "@/02.UI/Avatar/Avatar";
import Box from "@/02.UI/Box/Box";
import Card from "@/02.UI/Card/Card";
import Word from "@/02.UI/Word/Word";
import React, { useState } from "react";
import s from "./PostForm.module.scss";
import { HiCamera } from "react-icons/hi";
import { MdQueueMusic } from "react-icons/md";
import Textarea from "@/02.UI/Textarea/Textarea";
import Button from "@/02.UI/Button/Button";
import Separator from "@/02.UI/Separator/Separator";
import { useInput } from "@/01.shared/hooks/useInput";

const PostForm = () => {
  const field = useInput("");

  return (
    <Card>
      <Box>
        <div className={s.main}>
          <div className={s.avatar_wrapper}>
            <Avatar>
              <div />
            </Avatar>
          </div>
          <div className={s.inputfield}>
            <Textarea {...field} placeholder="Что у вас нового?" />
          </div>
          <div className={s.media}>
            <Button _flex>
              <HiCamera size={20} color={"var(--accent-faded)"} />
            </Button>
            <Button _flex>
              <MdQueueMusic size={20} color={"var(--accent-faded)"} />
            </Button>
          </div>
        </div>
      </Box>
      {field.value && (
        <>
          <Separator />
          <Box>
            <div className={s.options_container}>
              <Button _variant="solid">Опубликовать</Button>
            </div>
          </Box>
        </>
      )}
    </Card>
  );
};

export default PostForm;
