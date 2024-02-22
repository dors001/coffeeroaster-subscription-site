import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  href: string;
}

const ButtonPrimary = ({ title, href }: Props) => {
  return (
    <>
      <Link href={href}>
        <button className="btn-primary heading self-center">{title}</button>
      </Link>
    </>
  );
};

export default ButtonPrimary;
