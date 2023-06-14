"use client";

import { ExerciseTarget } from "@/app/interfaces";
import { SafeUser } from "@/app/types";
import { Listing } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeartButton from "../HeartButton";
import Button from "../Button";

interface ListingCardProps {
  data: ExerciseTarget;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  onAction,
  disabled,
  actionLabel,
  actionId,
  currentUser,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="
                col-span-1 cursor-pointer group
            "
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="Listing Image"
            src={data.gifUrl}
            className="
                            object-cover
                            h-full
                            w-full
                            group-hover:scale-110
                            transition
                        "
          />
          <div className="absolute top-3 right-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
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
            {data.bodyPart}
          </button>
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
            {data.target}
          </button>
        </div>
        <div className="font-semibold text-lg">
          {data.name.slice(0, 1).toUpperCase() + data.name.slice(1)}
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
};

export default ListingCard;
