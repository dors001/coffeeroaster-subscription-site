import Link from "next/link";
import React from "react";

const NavbarDesktop = () => {
  return (
    <>
      <ul className="hidden md:flex space-x-4 mt-1">
        <li>
          <Link href="/" className="text-slate-500 md:text-lg">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-slate-500 md:text-lg">
            About
          </Link>
        </li>
        <li>
          <Link href="/plan" className="text-slate-500 md:text-lg">
            create your plan
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavbarDesktop;
