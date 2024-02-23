import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  href: string;
  onClick: () => void;
}

const ButtonPrimary = ({ title, href, onClick }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <>
      <Link href={href}>
        <button
          className="btn-primary heading self-center"
          onClick={handleClick}
        >
          {title}
        </button>
      </Link>
    </>
  );
};

export default ButtonPrimary;
