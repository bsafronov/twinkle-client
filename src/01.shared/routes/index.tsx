import { useAppSelector } from "../hooks/redux";

export function useRoutes() {
  const { profile } = useAppSelector(state => state.user);

  const routes = {
    USER_HOME: `/users/@${profile?.username}`,
    USER_NEWS: `/users/@${profile?.username}/news`,
    USER_MESSAGES: `/users/@${profile?.username}/messages`,
    USER_SUBS: `/users/@${profile?.username}/subs`,
    USER_GROUPS: `/users/@${profile?.username}/groups`,
    USER_GALLERY: `/users/@${profile?.username}/gallery`,
    USER_MUSIC: `/users/@${profile?.username}/music`,
  };

  return routes;
}
