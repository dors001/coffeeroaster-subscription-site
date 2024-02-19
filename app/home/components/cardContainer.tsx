import React from "react";
import Image from "next/image";

interface Props {
  cardImageUrl: string;
  cardTitle: string;
  cardDescription: string;
}

const CardContainer = ({ cardImageUrl, cardTitle, cardDescription }: Props) => {
  return (
    <>
      <div className="card-container flex flex-col align-middle justify-center gap-14 p-3 pt-16 pb-6">
        <div className="card-image-container self-center">
          <Image
            src={cardImageUrl}
            alt="Card Image"
            className="card-image"
            width={72}
            height={72}
          />
        </div>
        <div className="card-body body-text flex flex-col">
          <h4 className="heading mb-6">{cardTitle}</h4>
          <p className="mb-6">{cardDescription}</p>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
