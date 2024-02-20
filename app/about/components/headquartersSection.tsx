import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HeadquartersSection = ({ children }: Props) => {
  return (
    <>
      <section className="headquarters-container flex flex-col m-6 gap-10">
        <div className="headquarters-title text-center">
          <h4 className="heading text-secondary-color">Our headquesrters</h4>
        </div>
        <div className="countries-container flex flex-col self-center gap-14">
          {children}
        </div>
      </section>
    </>
  );
};

export default HeadquartersSection;
