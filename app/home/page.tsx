import React from "react";
import Hero from "./components/Hero";
import Product from "./components/Product";
import data from "../database.json";
import CardContainer from "./components/cardContainer";
import SectionCard from "../components/sectionCard";
import ButtonPrimary from "../components/btnPrimary";
import BreakRow from "../components/breakRow";
import { useRouter } from "next/router";

const HomePage = () => {
  const products = data.products;
  const chooseUsData = data.choose_us;
  const howItWorksData = data.how_is_works;

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
      <div className="choose-us-section gap-16 relative">
        <div className="choose-us-body-text-container">
          <h3 className="heading mt-16 mb-6">Why choose us?</h3>
          <p className="body-text">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="cards-container flex flex-col gap-6">
          {Object.entries(chooseUsData).map(([key, value]) => (
            <CardContainer
              key={key}
              cardImageUrl={value.imageUrl}
              cardTitle={value.title}
              cardDescription={value.description}
            />
          ))}
        </div>
      </div>
      <div className="section-container flex flex-col justify-center align-middle ml-6 mr-6 mb-80 gap-6">
        <div className="section-title">
          <h4 className="heading text-secondary-color text-center">
            How it works
          </h4>
        </div>
        <BreakRow />
        <div className="section-cards-container flex flex-col justify-center align-middle gap-14">
          {Object.entries(howItWorksData).map(([key, value]) => (
            <SectionCard
              key={key}
              sectionCardNumber={value.number}
              sectionCardTitle={value.title}
              sectionCardDescription={value.description}
            />
          ))}
        </div>
        <div className="section-button">
          <ButtonPrimary title="Create your plan" href={"/plan"} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
