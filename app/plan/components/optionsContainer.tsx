import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const OptionsContainer = ({ children }: Props) => {
  return (
    <>
      <div className="options-container flex flex-col gap-4 mt-8 mb-8">
        {children}
      </div>
    </>
  );
};

export default OptionsContainer;
