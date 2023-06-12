import ListingCard from "../components/listings/ListingCard";
import getCurrentUser from "../actions/getCurrentUser";
import getExercises from "../actions/getExercises";
import { SafeUser } from "../types";
import Favorites from "./Favorites";

interface FavoritesPageProps {
  currentUser: SafeUser | null;
}

const FavoritesPage = async () => {
  return (
    <section className="bg-neutral-500 h-[790px]">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full relative -space-x-48 lg:-space-x-24">
          <div className="text-white flex-1 z-10 pl-6 lg:pl-0"></div>
        </div>
      </div>
    </section>
  );
};

export default FavoritesPage;
