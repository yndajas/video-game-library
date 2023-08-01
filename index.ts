import * as dotenv from "dotenv";
import {
  exchangeCodeForAccessToken,
  exchangeNpssoForCode,
  makeUniversalSearch,
} from "psn-api";

dotenv.config();

const npsso = process.env.NPSSO as string;

const getAuthorisation = async () => {
  const accessCode = await exchangeNpssoForCode(npsso);
  const authorisation = await exchangeCodeForAccessToken(accessCode);

  return authorisation;
};

const getAccountId = async (username: string) => {
  const authorisation = await getAuthorisation();

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
