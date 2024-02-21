import React from "react";
import Image from "next/image";

interface Props {
  isCollapsibleOpen: boolean;
  toggleCollapsible: () => void;
  optionTitle: string;
}

const CollapsibleTitle = ({
  optionTitle,
  isCollapsibleOpen,
  toggleCollapsible,
}: Props) => {
  return (
    <>
      <div className="choice-option-collapsible flex justify-between">
        <div className="choice-option-title">
          <h4 className="heading text-secondary-color">{optionTitle}</h4>
        </div>
        <div
          className="image-arrow-container h-3 self-center"
          aria-expanded={isCollapsibleOpen}
          aria-label={isCollapsibleOpen ? "Close menu" : "Open menu"}
        >
          {isCollapsibleOpen ? (
            <Image
              src="/assets/plan/desktop/icon-arrow.svg"
              onClick={toggleCollapsible}
              alt="Chevron Close"
              width={19}
              height={12}
              className="-rotate-180 transition-transform"
            />
          ) : (
            <Image
              src="/assets/plan/desktop/icon-arrow.svg"
              onClick={toggleCollapsible}
              alt="Chevron Open"
              width={19}
              height={12}
              className="transition-transform"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CollapsibleTitle;
