import { UserAuthResponse } from "@/01.shared/services/AuthService/AuthService.interface";

export interface IUser extends UserAuthResponse {}

export interface IUserState {
  profile?: IUser | null;
  test?: any;
  isAuth: boolean;
}
