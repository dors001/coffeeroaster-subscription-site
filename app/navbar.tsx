"use client";
import Image from "next/image";
import MenuDesktop from "./components/menuDesktop";
import MenuMobile from "./components/menuMobile";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="flex justify-between my-10 mx-6 md:mx-10">
        <div>
          <Image
            alt="Logo"
            src="/Assets/shared/desktop/logo.svg"
            width={235}
            height={25}
            layout="responsive"
          />
        </div>
        <MenuDesktop />
        <MenuMobile isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </>
  );
};

export default Navbar;
