import React from "react";
import s from "./ProfileHeaderInfo.module.scss";
import {
  HiLocationMarker,
  HiBriefcase,
  HiInformationCircle,
} from "react-icons/hi";
import Word from "@/02.UI/Word/Word";

const ProfileHeaderInfo = () => {
  return (
    <div className={s.main}>
      <h5 className={s.name}>Богдан Сафронов</h5>
      <ul className={s.list}>
        <li className={s.list_item}>
          <HiLocationMarker size={20} color={"var(--accent-faded)"} />
          <Word>Москва</Word>
        </li>
        <li className={s.list_item}>
          <HiBriefcase size={20} color={"var(--accent-faded)"} />
          <Word>РТУ МИРЭА</Word>
        </li>
        <li className={s.list_item}>
          <HiInformationCircle size={20} color={"var(--accent-faded)"} />
          <Word>Подробнее</Word>
        </li>
      </ul>
    </div>
  );
};

export default ProfileHeaderInfo;
