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
import ButtonPrimary from "../components/btnPrimary";
import PlanSummary from "./components/planSummary";

interface ActiveChoices {
  [key: string]: string;
}

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

  const handleSelectOption = (optionCategory: string, optionTitle: string) => {
    setActiveChoices((prevOptions) => ({
      ...prevOptions,
      [optionCategory]: optionTitle,
    }));

    switch (optionCategory) {
      case "preferences":
        setPreference(optionTitle);
        break;
      case "beanType":
        setBeanType(optionTitle);
        break;
      case "quantity":
        setQuantity(optionTitle);
        break;
      case "grindOption":
        setGrindOption(optionTitle);
        break;
      case "deliveryOption":
        setDeliveryOption(optionTitle);
        break;
    }
  };

  const [preference, setPreference] = useState(" ___ ");
  const [beanType, setBeanType] = useState(" ___ ");
  const [quantity, setQuantity] = useState(" ___ ");
  const [grindOption, setGrindOption] = useState(" ___ ");
  const [deliveryOption, setDeliveryOption] = useState(" ___ ");

  const [activeChoices, setActiveChoices] = useState<ActiveChoices>({
    preference: " ___ ",
    beanType: " ___ ",
    quantity: " ___ ",
    grindOption: " ___ ",
    deliveryOption: " ___ ",
  });

  const isChoiceActive = (optionCategory: string, optionTitle: string) => {
    const isChoiceActive = activeChoices[optionCategory] === optionTitle;

    return isChoiceActive;
  };
  const summarySentence = (
    <div>
      `“I drink my coffee as{" "}
      <span className="text-accent-color">{preference}</span>, with a{" "}
      <span className="text-accent-color">{beanType}</span> type of bean.{" "}
      <span className="text-accent-color">{quantity}</span> ground ala{" "}
      <span className="text-accent-color">{grindOption}</span>, sent to me{" "}
      <span className="text-accent-color">{deliveryOption}</span>.”`
    </div>
  );

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
                          isActiveChoice={isChoiceActive(
                            optionValue.category,
                            optionValue.title
                          )}
                          onClick={() =>
                            handleSelectOption(
                              optionValue.category,
                              optionValue.title
                            )
                          }
                        />
                      )
                    )}
                  </OptionsContainer>
                )}
              </div>
            ))}
        <PlanSummary summarySentence={summarySentence} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanPage;
