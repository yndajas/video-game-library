import { psnApiGetUserTitlesOptions } from "./@types/apis/psn";
import PsnApi from "./lib/apis/psn";

const psnApi = new PsnApi();

const logMyGamesWithTrophies = async (
  getUserTitlesOptions?: psnApiGetUserTitlesOptions
) => {
  const myGamesWithTrophies =
    await psnApi.getGamesWithTrophiesForAuthenticatedUser(getUserTitlesOptions);

  console.log(myGamesWithTrophies);
};

const logOtherUserGamesWithTrophies = async (
  username: string,
  getUserTitlesOptions?: psnApiGetUserTitlesOptions
) => {
  const otherUserGamesWithTrophies =
    await psnApi.getGamesWithTrophiesForOtherUser(
      username,
      getUserTitlesOptions
    );

  console.log(otherUserGamesWithTrophies);
};

// logMyGamesWithTrophies();
// logMyGamesWithTrophies({ offset: 100 });
// logMyGamesWithTrophies({ offset: 200 });
// logMyGamesWithTrophies({ offset: 300 });
// logMyGamesWithTrophies({ limit: 400 });

logOtherUserGamesWithTrophies("jonny2608");
