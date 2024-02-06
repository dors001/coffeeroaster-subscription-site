import Link from "next/link";
import Image from "next/image";

interface Props {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const NavbarMobile = ({ isMenuOpen, toggleMenu }: Props) => {
  return (
    <>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="align-middle"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <Image
              src="/Assets/shared/mobile/icon-close.svg"
              alt="Close menu"
              width={18}
              height={18}
            />
          ) : (
            <Image
              src="/Assets/shared/mobile/icon-hamburger.svg"
              alt="Open menu"
              width={18}
              height={18}
            />
          )}
        </button>
        {isMenuOpen && (
          <ul className="flex flex-col">
            <li>
              <Link href="/" className="text-slate-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/plan" className="text-slate-500">
                Create your plan
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default NavbarMobile;
