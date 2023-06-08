"use client";

import useActiveList from "@/app/hooks/useActiveList";
import { SafeUser } from "@/app/types";
import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  user?: SafeUser | null | User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;

  return (
    <div className="relative">
      <div
        className="
            relative
            inline-block
            rounded-full
            overflow-hidden
            h-9
            w-9
            md:h-11
            md:w-11
        "
      >
        <Image
          fill
          alt="avatar"
          src={user?.image || "/images/placeholder.jpg"}
          sizes="h-full w-full"
        />
      </div>
      {isActive && (
        <span
          className="
        absolute
        block
        rounded-full
        bg-green-500
        ring-2
        ring-white
        top-0
        right-0
        h-2
        w-2
        md:h-3
        md:w-3
      "
        />
      )}
    </div>
  );
};

export default Avatar;
