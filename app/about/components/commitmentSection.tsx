import React from "react";
import Image from "next/image";

const CommitmentSection = () => {
  const commitmentText =
    "We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.";
  const commitmentImgs = {
    imgMobile: "/assets/about/mobile/image-commitment.jpg",
  };

  return (
    <>
      <section className="mt-80 mb-80">
        <div className="commitment-section flex flex-col m-6 mt-24 gap-12">
          <div className="image-container justify-self-center">
            <Image
              src={commitmentImgs.imgMobile}
              alt="Out Commitment"
              className="rounded-lg md:hidden"
              width={400}
              height={400}
            />
          </div>
          <div className="commitment-body-container text-center">
            <h3 className="heading text-primary-color mb-8 xl:text-left">
              Our commitment
            </h3>
            <p className="body-text text-primary-color xl:text-left">
              {commitmentText}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommitmentSection;
