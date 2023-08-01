import * as dotenv from "dotenv";
import {
  exchangeCodeForAccessToken,
  exchangeNpssoForCode,
  getUserTitles,
  makeUniversalSearch,
} from "psn-api";

import type {
  psnApiAuthorisation,
  psnApiGetUserTitlesOptions,
} from "../../@types/apis/psn";

dotenv.config();

export default class PsnApi {
  private authorisation: psnApiAuthorisation | undefined;

  constructor() {}

  private getAuthorisation = async () => {
    if (!this.authorisation) {
      const npsso = process.env.NPSSO as string;
      const accessCode = await exchangeNpssoForCode(npsso);
      this.authorisation = await exchangeCodeForAccessToken(accessCode);
    }

    return this.authorisation;
  };

  private getAccountId = async (username: string) => {
    const authorisation = await this.getAuthorisation();

    const response = await makeUniversalSearch(
      authorisation,
      username,
      "SocialAllAccounts"
    );

    const results = response.domainResponses[0].results;

    const result = results.find(
      (results) => results.socialMetadata.onlineId === username
    );

    return result?.socialMetadata.accountId;
  };

  getGamesWithTrophies = async (
    accountId: string,
    getUserTitlesOptions?: psnApiGetUserTitlesOptions
  ) => {
    const authorization = await this.getAuthorisation();
    const accessToken = authorization.accessToken;

    return getUserTitles({ accessToken }, accountId, getUserTitlesOptions);
  };
}
