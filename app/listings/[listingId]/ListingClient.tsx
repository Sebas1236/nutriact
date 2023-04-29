"use client";

import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import { categories } from "@/app/components/navbar/Categories";
import { ExerciseTarget } from "@/app/interfaces";
import { SafeUser } from "@/app/types";
import { useMemo } from "react";

interface ListingClientProps {
  listing: ExerciseTarget;
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.bodyPart);
  }, [listing.bodyPart]);
  return (
    <Container>
      <div className="max-w-screen-kg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.name}
            imageSrc={listing.gifUrl}
            id={listing.id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
