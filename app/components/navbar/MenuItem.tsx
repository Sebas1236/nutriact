"use client";

import { IconType } from "react-icons/lib";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  icon?: IconType;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, icon: Icon }) => {
  return (
    <div
      onClick={onClick}
      // px-4
      className="
        px-2
        py-3
        hover:bg-neutral-300
        transition
        font-semibold
      "
    >
      {Icon && (
        <div className="flex flex-row items-center gap-3">
          <Icon />
          <span>{label}</span>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
