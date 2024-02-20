import React from "react";
import Image from "next/image";

export interface ContactInformationProps {
  countryImage: string;
  countryName: string;
  city: string;
  streetAddress: string;
  areaCode: string;
  contactNumber: string;
}

const ContactInformation = ({
  countryImage,
  countryName,
  city,
  streetAddress,
  areaCode,
  contactNumber,
}: ContactInformationProps) => {
  return (
    <>
      <div className="country-container text-center flex flex-col">
        <div className="country-image-container self-center">
          <Image
            src={countryImage}
            alt={countryName}
            width={50}
            height={45}
            className="mb-10"
          />
        </div>
        <h4 className="heading text-primary-color">{countryName}</h4>
        <p className="headquarters-contact-text">{streetAddress}</p>
        <p className="headquarters-contact-text">{city}</p>
        <p className="headquarters-contact-text">{areaCode}</p>
        <p className="headquarters-contact-text">{contactNumber}</p>
      </div>
    </>
  );
};

export default ContactInformation;
