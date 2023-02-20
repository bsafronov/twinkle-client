import Avatar from "@/02.UI/Avatar/Avatar";
import Box from "@/02.UI/Box/Box";
import Card from "@/02.UI/Card/Card";
import Separator from "@/02.UI/Separator/Separator";
import Title from "@/02.UI/Title/Title";
import Word from "@/02.UI/Word/Word";
import React from "react";
import s from "./SubsShortList.module.scss";

interface SubsShortListProps {}

const SubsShortList: React.FC<SubsShortListProps> = ({}) => {
  const users = ["Максим", "Алексей", "Алёна", "Станислав"];

  return (
    <Card>
      <div className={s.main}>
        <Box>
          <div className={s.content}>
            <div className={s.title}>
              <Title size={1}>Подписки</Title>
              <Word>5</Word>
            </div>
            <ul className={s.users}>
              {users.map((user, index) => (
                <li className={s.user} key={index}>
                  <Avatar size={4}>
                    <div />
                  </Avatar>
                  <Word>{user}</Word>
                </li>
              ))}
            </ul>
          </div>
        </Box>
        <Separator />
        <Box>
          <div className={s.content}>
            <div className={s.title}>
              <Title size={1}>Подписчики</Title>
              <Word>12</Word>
            </div>
            <div className={s.users}>
              {users.map((user, index) => (
                <li className={s.user} key={index}>
                  <Avatar size={4}>
                    <div />
                  </Avatar>
                  <Word>{user}</Word>
                </li>
              ))}
            </div>
          </div>
        </Box>
      </div>
    </Card>
  );
};

export default SubsShortList;
