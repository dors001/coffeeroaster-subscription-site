"use client";
import React, { useState } from "react";

interface Props {
  optionTitle: string;
  optionDescription: string;
}

const ChoiceCard = ({ optionTitle, optionDescription }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className={`option-container ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <h4 className="heading text-primary-color">{optionTitle}</h4>
        <p className="body-text text-primary-color">{optionDescription}</p>
      </div>
    </>
  );
};

export default ChoiceCard;
