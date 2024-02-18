import React from "react";
import ButtonPrimary from "@/app/components/btnPrimary";

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
          <ButtonPrimary title="Create your plan" />
        </div>
      </div>
    </>
  );
};

export default Hero;
