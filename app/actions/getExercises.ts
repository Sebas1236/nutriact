import { ExerciseTarget } from "../interfaces";

export default async function getExerciseTargets() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY as string,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST as string,
    },
  };

  try {
    const response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises",
      options
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const exerciseTargets: ExerciseTarget[] = await response.json();

    //send only 100 exercises
    return exerciseTargets.slice(0, 100);
  } catch (error: any) {
    return [];
  }
}
