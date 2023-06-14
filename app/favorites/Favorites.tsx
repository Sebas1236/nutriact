import ListingCard from "../components/listings/ListingCard";
import { ExerciseTarget } from "../interfaces";
import { SafeUser } from "../types";

interface FavoritesPageProps {
  currentUser: SafeUser | null;
  favorites: ExerciseTarget[];
}

const Favorites: React.FC<FavoritesPageProps> = ({
  currentUser,
  favorites,
}) => {
  return (
    <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-8 px-4">
      {favorites.map((listing) => {
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
