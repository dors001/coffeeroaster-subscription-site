import React from "react";

const Banner = () => {
  const bannerText =
    "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.";
    
  return (
    <>
      <section>
        <div className="plan-banner-container flex">
          <div className="banner-body-container text-center">
            <h2 className="heading text-primary-text-color mt-6 mb-6">
              Create a plan
            </h2>
            <p className="body-text text-primary-text-color">{bannerText}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
