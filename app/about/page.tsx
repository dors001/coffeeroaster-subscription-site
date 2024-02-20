import React from "react";
import data from "../database.json";
import AboutBanner from "./components/banner";
import CommitmentSection from "./components/commitmentSection";
import QualitySection from "./components/qualitySection";
import ContactInformation from "./components/contactInformation";
import HeadquartersSection from "./components/headquartersSection";

const AboutPage = () => {
  const headquartersData = data.headquarters;

  return (
    <>
      <AboutBanner />
      <CommitmentSection />
      <QualitySection />
      <HeadquartersSection>
        {Object.entries(headquartersData).map(([key, value]) => (
          <ContactInformation
            key={key}
            countryImage={value.country_image}
            countryName={value.country_name}
            city={value.city}
            streetAddress={value.street_address}
            areaCode={value.area_code}
            contactNumber={value.contact_number}
          />
        ))}
      </HeadquartersSection>
    </>
  );
};

export default AboutPage;
