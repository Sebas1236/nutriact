"use client";

import { SafeUser } from "@/app/types";
import Image from "next/image";

interface AvatarProps {
  user?: SafeUser | null;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
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
        />
      </div>
    </div>
  );
};

export default Avatar;
