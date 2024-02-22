import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SideMenu = ({ children }: Props) => {
  return (
    <>
      <div className="side-menu-container flex flex-col">{children}</div>
    </>
  );
};

export default SideMenu;
