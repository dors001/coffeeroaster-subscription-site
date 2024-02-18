import React from "react";

interface Props {
  title: string;
}

const ButtonPrimary = ({ title }: Props) => {
  return (
    <>
      <button className="btn-primary heading self-center">{title}</button>
    </>
  );
};

export default ButtonPrimary;
