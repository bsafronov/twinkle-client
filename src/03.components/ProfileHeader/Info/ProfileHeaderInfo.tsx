import React from "react";
import s from "./ProfileHeaderInfo.module.scss";
import {
  HiLocationMarker,
  HiBriefcase,
  HiInformationCircle,
} from "react-icons/hi";
import Word from "@/02.UI/Word/Word";
import { useAppSelector } from "@/01.shared/hooks/redux";
import { displayName } from "@/01.shared/helpers/displayName";

const ProfileHeaderInfo = () => {
  const { owner } = useAppSelector(state => state.userWall);

  return (
    <div className={s.main}>
      <h5 className={s.name}>{owner && displayName(owner)}</h5>
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
