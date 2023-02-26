import { useRoutes } from "@/01.shared/routes";
import {
  HiUserCircle,
  HiNewspaper,
  HiChatAlt,
  HiUsers,
  HiUserGroup,
  HiPhotograph,
  HiMusicNote,
} from "react-icons/hi";

export interface NavbarItemProps {
  logo: any;
  desc: string;
  path: string;
}

export function useNavbarRoutes() {
  const routes = useRoutes();
  return [
    { logo: HiUserCircle, desc: "Моя страница", path: routes.USER_HOME },
    { logo: HiNewspaper, desc: "Новости", path: routes.USER_NEWS },
    {
      logo: HiChatAlt,
      desc: "Мессенджер",
      path: routes.USER_MESSAGES,
    },
    { logo: HiUsers, desc: "Подписки", path: routes.USER_SUBS },
    {
      logo: HiUserGroup,
      desc: "Сообщества",
      path: routes.USER_GROUPS,
    },
    {
      logo: HiPhotograph,
      desc: "Фотографии",
      path: routes.USER_GALLERY,
    },
    { logo: HiMusicNote, desc: "Музыка", path: routes.USER_MUSIC },
  ];
}
