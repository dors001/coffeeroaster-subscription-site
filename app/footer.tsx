import React from "react";
import Link from "next/link";
import Image from "next/image";
import Socials from "./components/socials";
import data from "./database.json";

const Footer = () => {
  const socialsData = data.assets.socials;
  return (
    <>
      <footer className="footer-container bg-primary-color flex flex-col justify-between align-middle text-center m-6 p-14 gap-6">
        <div className="footer-logo-container">
          <Link href="/home">
            <Image
              alt="Logo"
              src="/assets/shared/desktop/logo light.svg"
              width={235}
              height={25}
              layout="responsive"
            />
          </Link>
        </div>
        <div className="footer-nav-menu desktop-menu-text mt-8 mb-8">
          <ul className="nav-menu flex flex-col gap-4">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/plan">create your plan</Link>
            </li>
          </ul>
        </div>
        <div className="socials-container flex justify-center gap-6">
          {Object.entries(socialsData).map(([key, value]) => (
            <Socials
              key={key}
              socialHref={value.social_href}
              socialIcon={value.social_image}
              socialName={value.social_name + "icon"}
            />
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
