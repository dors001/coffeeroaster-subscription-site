"use client";
import Image from "next/image";
import MenuDesktop from "./components/menuDesktop";
import MenuMobile from "./components/menuMobile";
import { useState } from "react";
import HamburgerIconLogic from "./components/hamburgerIconLogic";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="relative" role="navigation">
        <div className="flex justify-between my-4 mx-6 md:mx-10">
          <div>
            <Link href="/home">
              <Image
                alt="Logo"
                src="/assets/shared/desktop/logo dark.svg"
                width={235}
                height={25}
                layout="responsive"
              />
            </Link>
          </div>
          <MenuDesktop />
          <HamburgerIconLogic isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <MenuMobile isMenuOpen={isMenuOpen} handleLinkClick={handleLinkClick} />
      </div>
    </>
  );
};

export default Navbar;
