"use client";
import React, { useState } from "react";
import data from "../database.json";
import Banner from "./components/banner";
import PlanSteps from "./components/planSteps";
import SectionCard from "./components/sectionCard";
import CollapsibleTitle from "./components/collapsibleTitle";
import OptionsContainer from "./components/optionsContainer";
import ChoiceCard from "./components/choiceCard";

const PlanPage = () => {
  const planStepsData = data.plan_steps;
  const planChoicesData = data.plan_choices;

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleMenu = (sectionKey: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

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
      <section className="plan-choice-section-container flex flex-col gap-28 mt-60 mb-60 ml-6 mr-6">
        {Object.entries(planChoicesData).map(([key, planChoice]) => (
          <div key={key} className="choice-option-container">
            <CollapsibleTitle
              optionTitle={planChoice.options_title}
              isCollapsibleOpen={openSections[key]}
              toggleCollapsible={() => toggleMenu(key)}
            />
            {openSections[key] && (
              <OptionsContainer>
                {Object.entries(planChoice.options).map(
                  ([optionKey, optionValue]) => (
                    <ChoiceCard
                      key={optionKey}
                      optionTitle={optionValue.title}
                      optionDescription={optionValue.description}
                    />
                  )
                )}
              </OptionsContainer>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default PlanPage;
