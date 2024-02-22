"use client";
import React, { useState } from "react";
import data from "../database.json";
import Banner from "./components/banner";
import PlanSteps from "./components/planSteps";
import SectionCard from "./components/sectionCard";
import CollapsibleTitle from "./components/collapsibleTitle";
import OptionsContainer from "./components/optionsContainer";
import ChoiceCard from "./components/choiceCard";
import SideMenu from "./components/sideMenu";
import SideMenuItem from "./components/sideMenuItem";

const PlanPage = () => {
  const planStepsData = data.plan_steps;
  const planChoicesData = data.plan_choices;
  const sideMenuChoicesData = data.side_menu;

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleMenu = (sectionKey: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const handleMenuItemClick = (sectionKey: string) => {
    toggleMenu(sectionKey);
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
      <section className="plan-choice-section-container flex flex-col gap-28 ml-6 mr-6">
        <div className="plan-options-container flex">
          <SideMenu>
            {Object.entries(sideMenuChoicesData).map(([key, planChoice]) => (
              <SideMenuItem
                key={key}
                number={planChoice.number}
                title={planChoice.title}
                isMenuItemClicked={openSections[key] ?? false}
                handleMenuItemClick={() => handleMenuItemClick(key)}
              />
            ))}
          </SideMenu>
          <div className="choices-container flex flex-col">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanPage;
