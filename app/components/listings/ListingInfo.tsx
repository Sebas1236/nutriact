"use client";

import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import { ExerciseTarget } from "@/app/interfaces";

interface ListingInfoProps {
  name: string;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  target: string;
  equipment: string;
  bodyPart: string;
}

const ListingInfo: React.FC<ExerciseTarget> = ({
  bodyPart,
  equipment,
  gifUrl,
  id,
  name,
  target,
}) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <div>{name}</div>
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <div>{target}</div>
          <div>- {equipment}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <div>Body Part</div>
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <div>{bodyPart}</div>
        </div>

        <hr />

        {/* {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )} */}
        <hr />
      </div>
    </div>
  );
};

export default ListingInfo;
