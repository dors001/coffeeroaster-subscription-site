import React from "react";
import Image from "next/image";

interface Props {
  productImageUrl: string;
  productTitle: string;
  productDescription: string;
}

const Product = ({
  productImageUrl,
  productTitle,
  productDescription,
}: Props) => {
  return (
    <>
      <div className="product-container flex flex-col">
        <div className="product-image">
          <Image
            src={productImageUrl}
            alt="Coffee Prodcut"
            width={200}
            height={151}
          />
        </div>
        <div className="product-container-body text-primary">
          <h2 className="heading product-heading mt-6 mb-4">{productTitle}</h2>
          <p>{productDescription}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
