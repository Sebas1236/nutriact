import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "./getListingById";
import { ExerciseTarget } from "../interfaces";
import { SafeUser } from "../types";
export default async function getFavorites(currentUser: SafeUser) {
  const url = `https://exercisedb.p.rapidapi.com/favorites`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY as string,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST as string,
    },
  };

  try {
    let exerciseTargets: ExerciseTarget[] = [];

    if (!currentUser) {
      return [];
    }

    // for each favorite get the exercise
    const { favoriteIds } = currentUser;

    for (const favoriteId of favoriteIds) {
      const exercise = await getListingById({ listingId: favoriteId });

      if (!exercise) {
        return [];
      }

      exerciseTargets.push(exercise);
    }

    return exerciseTargets;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
}
