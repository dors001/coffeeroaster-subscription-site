import React from "react";
import ButtonPrimary from "@/app/components/btnPrimary";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
}

const Hero = ({ title, description }: Props) => {
  return (
    <>
      <div className="hero-container hero-background-image">
        <div className="hero-container-body h-full flex flex-col gap-6 justify-center">
          <h2 className="color-text heading hero-title">{title}</h2>
          <p className="color-text hero-description mb-3">{description}</p>
          <Link href="/plan">
            <button className="btn-primary heading self-center">
              Create your plan
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
