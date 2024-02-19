import React from "react";

interface Props {
  sectionCardNumber: string;
  sectionCardTitle: string;
  sectionCardDescription: string;
}

const SectionCard = ({
  sectionCardNumber,
  sectionCardTitle,
  sectionCardDescription,
}: Props) => {
  return (
    <>
      <div className="section-card-container">
        <div className="section-card-number-container">
          <h1 className="heading text-secondary-text-color">
            {sectionCardNumber}
          </h1>
        </div>
        <h4 className="heading text-primary-color mt-6 mb-6">
          {sectionCardTitle}
        </h4>
        <p className="section-card-body-text text-primary-color">
          {sectionCardDescription}
        </p>
      </div>
    </>
  );
};

export default SectionCard;
