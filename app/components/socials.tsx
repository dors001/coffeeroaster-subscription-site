import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  socialName: string;
  socialHref: string;
  socialIcon: string;
}

const Socials = ({ socialHref, socialIcon, socialName }: Props) => {
  return (
    <>
      <div className="social-container self-center">
        <Link href={socialHref}>
          <Image
            src={socialIcon}
            alt={socialName}
            width={24}
            height={24}
            className="social-icon"
          />
        </Link>
      </div>
    </>
  );
};

export default Socials;
