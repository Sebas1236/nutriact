
import { GetStaticProps, NextPage } from "next";
import getCurrentUser from "./actions/getCurrentUser";
import getListings from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import { ExerciseTarget } from './interfaces/exercise-target';

const getExerciseTargets = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '837290a091mshec0fdc4c67c5bb8p1929dcjsn268d3df28e2e',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  const response = await fetch('https://exercisedb.p.rapidapi.com/exercises', options);

  if(!response.ok) {
    throw new Error(response.statusText);
  }
  
  const exerciseTargets: ExerciseTarget[] = await response.json();

  return exerciseTargets;

}

export default async function Home() {
  const exerciseTargets = await getExerciseTargets();
  console.log(exerciseTargets);
  // const listings = await getListings();
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {
            exerciseTargets.map((listing) => {
              return (
                <ListingCard
                  currentUser={currentUser} 
                  key={listing.id}
                  data={listing}
                />
              )
            })
          }
        </div>
      </Container>
    </ClientOnly>
  );
};
