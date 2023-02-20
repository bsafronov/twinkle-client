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

export const navbarItems: NavbarItemProps[] = [
  { logo: HiUserCircle, desc: "Моя страница", path: "/users/bogdasafronov" },
  { logo: HiNewspaper, desc: "Новости", path: "/users/bogdasafronov/news" },
  {
    logo: HiChatAlt,
    desc: "Мессенджер",
    path: "/users/bogdasafronov/messages",
  },
  { logo: HiUsers, desc: "Подписки", path: "/users/bogdasafronov/subs" },
  {
    logo: HiUserGroup,
    desc: "Сообщества",
    path: "/users/bogdasafronov/groups",
  },
  {
    logo: HiPhotograph,
    desc: "Фотографии",
    path: "/users/bogdasafronov/gallery",
  },
  { logo: HiMusicNote, desc: "Музыка", path: "/users/bogdasafronov/music" },
];
