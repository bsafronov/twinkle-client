import jwtDecode from "jwt-decode";
import $api from "../../http";
import { CreateUserDTO, IToken, LoginUserDTO } from "./AuthService.interface";

export class AuthService {
  static async registration(dto: CreateUserDTO): Promise<IToken> {
    const { data } = await $api.post("auth/registration", dto);
    localStorage.setItem("token", data.token);

    return jwtDecode(data.token);
  }

  static async login(dto: LoginUserDTO): Promise<IToken> {
    const { data } = await $api.post("auth/login", dto);
    localStorage.setItem("token", data.token);

    return jwtDecode(data.token);
  }

  static async checkAuth(): Promise<boolean> {
    const { data } = await $api.post("auth/check");
    return data;
  }
}
