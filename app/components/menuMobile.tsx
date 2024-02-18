import Link from "next/link";

interface Props {
  isMenuOpen: boolean;
}

const NavbarMobile = ({ isMenuOpen }: Props) => {
  return (
    <>
      {isMenuOpen && (
        <ul
          className="flex flex-col absolute w-screen text-center gap-5 text-xl p-10 mobile-menu-bg"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <li>
            <Link href="/home" className="text-primary heading text-2xl">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-primary heading text-2xl">
              About
            </Link>
          </li>
          <li>
            <Link href="/plan" className="text-primary heading text-2xl">
              Create your plan
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default NavbarMobile;
