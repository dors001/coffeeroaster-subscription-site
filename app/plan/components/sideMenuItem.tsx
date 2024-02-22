import React from "react";

interface Props {
  number: string;
  title: string;
  isMenuItemClicked: boolean;
  handleMenuItemClick: () => void;
}

const SideMenuItem = ({ number, title, isMenuItemClicked, handleMenuItemClick }: Props) => {
  return (
    <>
      <div className="flex" onClick={handleMenuItemClick}>
        <div
          className={`side-menu-text heading ${
            isMenuItemClicked ? "preference-active" : ""
          }`}
        >
          {number}
        </div>
        <div
          className={`side-menu-text heading ${
            isMenuItemClicked ? "preference-active" : ""
          }`}
        >
          {title}
        </div>
      </div>
      <div className="side-menu-underline"></div>
    </>
  );
};

export default SideMenuItem;
