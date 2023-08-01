import * as dotenv from "dotenv";
import { exchangeCodeForAccessToken, exchangeNpssoForCode } from "psn-api";

dotenv.config();

const npsso = process.env.NPSSO as string;

const getAuthorisation = async () => {
  const accessCode = await exchangeNpssoForCode(npsso);
  const authorisation = await exchangeCodeForAccessToken(accessCode);

  return authorisation;
};
