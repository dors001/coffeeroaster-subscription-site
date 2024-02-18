import React from "react";
import Hero from "./components/Hero";
import Product from "./components/Product";
import productData from "../database.json";

const HomePage = () => {
  const { products } = productData;

  return (
    <>
      <Hero
        title="Great coffee made simple."
        description="Start your morning with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
      />
      <div className="collection-container">
          <h2 className="collection-title heading">our collection</h2>
          <div className="products-container flex">
            {Object.entries(products).map(([key, value]) => (
              <Product
                key={key}
                productImageUrl={value.imageUrl}
                productTitle={value.title}
                productDescription={value.description}
              />
            ))}
          </div>
      </div>
    </>
  );
};

export default HomePage;
