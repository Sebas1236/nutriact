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
        <div className="font-semibold text-lg">
          {data.name}, {data.bodyPart}
        </div>
        <div className="font-light text-neutral-500">{data.target}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">- {data.equipment}</div>
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
