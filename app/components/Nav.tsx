"use client";

import Link from "next/link";
import { nav } from "../utils/data";
import UserMenu from "./navbar/UserMenu";
import { useEffect, useState } from "react";
// import getCurrentUser from "../actions/getCurrentUser";

const Nav = () => {
  // const currentUser = await getCurrentUser();
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <nav className="hidden lg:flex dark:bg-black">
      <ul className="flex gap-x-8 text-white">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <Link
                href={item.href}
                className="hover:text-primary-200 transition"
              >
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
