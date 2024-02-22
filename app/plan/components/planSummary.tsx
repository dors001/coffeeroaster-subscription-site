import React, { ReactElement } from "react";
import ButtonPrimary from "@/app/components/btnPrimary";

interface Props {
  summarySentence: ReactElement;
}

const PlanSummary = ({ summarySentence }: Props) => {
  return (
    <>
      <section className="summary-container flex flex-col">
        <div className="order-summary-container bg-primary-color m-6 rounded-lg p-6">
          <span className="body-text text-secondary-color">ORDER SUMMARY</span>
          <h4 className="heading text-primary-text-color">{summarySentence}</h4>
        </div>
        <div className="plan-summary-button-container m-6">
          <ButtonPrimary title="Create your plan" href="/plan" />
        </div>
      </section>
    </>
  );
};

export default PlanSummary;
