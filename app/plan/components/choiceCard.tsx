"use client";
import React from "react";

interface Props {
  optionTitle: string;
  optionDescription: string;
  isActiveChoice: boolean;
  onClick: () => void;
}

const ChoiceCard = ({
  optionTitle,
  optionDescription,
  isActiveChoice,
  onClick,
}: Props) => {
  return (
    <>
      <div
        className={`option-container ${isActiveChoice ? "active" : ""}`}
        onClick={onClick}
      >
        <h4 className="heading text-primary-color">{optionTitle}</h4>
        <p className="body-text text-primary-color">{optionDescription}</p>
      </div>
    </>
  );
};

export default ChoiceCard;
