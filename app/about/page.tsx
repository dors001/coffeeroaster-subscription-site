import React from "react";
import Image from "next/image";
import AboutBanner from "./components/banner";
import CommitmentSection from "./components/commitmentSection";
import QualitySection from "./components/qualitySection";

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <CommitmentSection />
      <QualitySection />
    </>
  );
};

export default AboutPage;
