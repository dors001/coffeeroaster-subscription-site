import BreakRow from "@/app/components/breakRow";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PlanSteps = ({ children }: Props) => {
  return (
    <>
      <section className="plan-steps-container flex flex-col justify-center align-middle gap-6 bg-primary-color">
        <BreakRow />
        <div className="plan-cards-container flex flex-col justify-center align-middle gap-14">
          {children}
        </div>
      </section>
    </>
  );
};

export default PlanSteps;
