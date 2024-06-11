import { RefreshTokenData } from "./Authentication/auth0";

export interface AuthParams {
  authToken: string;
  loginAs?: string | null;
  avatar: string;
  userInfo: any;
  refreshTokenData: RefreshTokenData | null;
  expiresIn: number;
}
