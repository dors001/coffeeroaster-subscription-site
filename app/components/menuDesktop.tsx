import Link from "next/link";
import React from "react";

const NavbarDesktop = () => {
  return (
    <>
      <ul className="hidden md:flex space-x-4 mt-1 navigation">
        <li>
          <Link href="/" className="text-primary desktop-menu-text">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-primary desktop-menu-text">
            About
          </Link>
        </li>
        <li>
          <Link href="/plan" className="text-primary desktop-menu-text">
            create your plan
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavbarDesktop;
