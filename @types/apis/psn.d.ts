type psnApiAuthorisation = {
  accessToken: string;
  expiresIn: number;
  idToken: string;
  refreshToken: string;
  refreshTokenExpiresIn: number;
  scope: string;
  tokenType: string;
};

type psnApiGetUserTitlesOptions = {
  limit?: number;
  offset?: number;
};

export type { psnApiAuthorisation, psnApiGetUserTitlesOptions };
