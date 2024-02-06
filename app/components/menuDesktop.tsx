import Link from "next/link";
import React from "react";

const NavbarDesktop = () => {
  return (
    <>
      <ul className="hidden md:flex">
        <li>
          <Link
            href="/"
            className="text-slate-500 text-xs sm:text-sm md:text-base lg:text-lg"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-slate-500 text-xs sm:text-sm md:text-base lg:text-lg"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/plan"
            className="text-slate-500 text-xs sm:text-sm md:text-base lg:text-lg"
          >
            create your plan
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavbarDesktop;
