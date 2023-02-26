import { UserProps } from "../store/reducers/userWallReducer/userWall.interface";

export function displayName(user: any) {
  if (!user) return;

  if (user.firstName && user.lastName) {
    return `${user.firstName} ${user.lastName}`;
  }

  return user.username;
}
