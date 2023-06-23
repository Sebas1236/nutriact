"use client";
import Image from "next/image";
import ListingCard from "../components/listings/ListingCard";
import { ExerciseTarget, FoodTarget } from "../interfaces";
import { SafeUser } from "../types";
import HeartButton from "../components/HeartButton";
import {Food} from "@prisma/client";

interface FoodsPageProps {
  
  currentUser: SafeUser | null;
  favorites: Food[];
}

const Foods: React.FC<FoodsPageProps> = ({ currentUser, favorites }) => {
  return (
    <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-8 px-4">
      {favorites.map((listing) => {
        return (
          <div
            key={listing.id}
            className="
                    col-span-1 cursor-pointer group
                "
          >
            <div className="flex flex-col gap-2 w-full">
              <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                <Image
                  fill
                  alt="Food Image"
                  src={"/images/Homelet.jpg"}
                  className="
                                object-cover
                                h-full
                                w-full
                                group-hover:scale-110
                                transition
                            "
                />
                <div className="absolute top-3 right-3">
                  <HeartButton
                    listingId={listing.id}
                    currentUser={currentUser}
                  />
                </div>
              </div>
              <div
                className="
                            flex
                            justify-between
                            items-center
                            w-full
                            text-sm
                            text-gray-500
    
            "
              >
                {/*
                <button
                  className="rounded-lg bg-orange-300
                hover:bg-orange-400
                transition
                duration-300
                ease-in-out
                px-1
                py-1
                font-semibold
                text-lg
              "
                >
                  {listing.calories}
                </button>
                */}
                <button
                  className="
              rounded-lg
              bg-red-300
              hover:bg-red-400
              transition
              duration-300
              ease-in-out
              px-2
              py-1
              font-semibold 
              text-lg"
                >
                  {listing.name}
                </button>
              </div>
              <div className="font-semibold text-lg">
                {"Ingredientes: "+listing.instructions.slice(0, 1).toUpperCase() +
                  listing.instructions.slice(1) + "\n Ingredientes: "+
                  listing.ingredients+ "\n Hora: "+
                  listing.hour+ "\n Calorias: "+
                  listing.calories
                  }
              </div>
              {/* {
                        onAction && actionLabel && (
                            <Button 
                                disabled={disabled}
                                small
                                label={actionLabel}
                            />
                        )
                    } */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Foods;
