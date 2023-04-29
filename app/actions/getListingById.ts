import { ExerciseTarget } from "../interfaces";

interface IParams {
  listingId?: string;
}

export default async function getListingById(params: IParams) {
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.listingId}}`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY as string,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST as string,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const exerciseTargets: ExerciseTarget = await response.json();

    return exerciseTargets;
  } catch (error: any) {
    throw new Error(error);
  }
}
