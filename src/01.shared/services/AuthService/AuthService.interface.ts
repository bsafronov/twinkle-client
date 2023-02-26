export interface CreateUserDTO {
  email: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  age?: string;
}

export interface UserAuthResponse {
  id: number;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginUserDTO {
  login: string;
  password: string;
}

export interface IToken {
  user: UserAuthResponse;
  iat: number;
  exp: number;
}
