"use client";

import Link from "next/link";
import { nav } from "../utils/data";
import UserMenu from "./navbar/UserMenu";
// import getCurrentUser from "../actions/getCurrentUser";

const Nav = () => {
  // const currentUser = await getCurrentUser();

  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-x-8 text-white">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <Link href="#" className="hover:text-primary-200 transition">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <UserMenu currentUser={currentUser} /> */}
    </nav>
  );
};

export default Nav;
