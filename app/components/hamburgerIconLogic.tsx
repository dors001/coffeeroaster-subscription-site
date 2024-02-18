import Image from "next/image";

interface Props {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerIconLogic = ({ isMenuOpen, toggleMenu }: Props) => {
  return (
    <>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="icon align-middle mt-2"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <Image
              src="/assets/shared/mobile/icon-close.svg"
              alt="Close menu"
              className="mobile-menu"
              width={18}
              height={18}
            />
          ) : (
            <Image
              src="/assets/shared/mobile/icon-hamburger.svg"
              alt="Open menu"
              className="mobile-menu"
              width={18}
              height={18}
            />
          )}
        </button>
      </div>
    </>
  );
};

export default HamburgerIconLogic;
