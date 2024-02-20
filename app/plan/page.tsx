import React from "react";
import data from "../database.json";
import Banner from "./components/banner";
import PlanSteps from "./components/planSteps";
import SectionCard from "./components/sectionCard";

const PlanPage = () => {
  const planStepsData = data.plan_steps;
  return (
    <>
      <Banner />
      <PlanSteps>
        {Object.entries(planStepsData).map(([key, value]) => (
          <SectionCard
            key={key}
            sectionCardNumber={value.number}
            sectionCardTitle={value.title}
            sectionCardDescription={value.description}
          />
        ))}
      </PlanSteps>
    </>
  );
};

export default PlanPage;
