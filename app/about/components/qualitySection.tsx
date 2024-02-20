import React from "react";
import Image from "next/image";

const QualitySection = () => {
  const aboutQualityDescription =
    "Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.";

  return (
    <>
      <section className="about-quality-story-container relative bg-primary-color">
        <div className="about-quality-img-container absolute">
          <Image
            src="/assets/about/mobile/image-quality.jpg"
            alt="Uncompromising Quality"
            className="about-quality-img rounded-lg md:hidden"
            width={279}
            height={156}
          />
        </div>
        <div className="about-quality-body-container text-center p-6 xl:text-left">
          <h3 className="heading text-primary-text-color mb-6">
            Uncompromising quality
          </h3>
          <p className="body-text text-primary-text-color">
            {aboutQualityDescription}
          </p>
        </div>
      </section>
    </>
  );
};

export default QualitySection;
