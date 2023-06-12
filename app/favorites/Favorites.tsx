"use client";

import getExerciseTargets from "../actions/getExercises";
import ListingCard from "../components/listings/ListingCard";
import { ExerciseTarget } from "../interfaces";
import { SafeUser } from "../types";

interface FavoritesPageProps {
  currentUser: SafeUser | null;
  exerciseTargets: ExerciseTarget[];
}

const Favorites: React.FC<FavoritesPageProps> = ({
  currentUser,
  exerciseTargets,
}) => {
  return (
    <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
      {exerciseTargets.map((listing) => {
        return (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
