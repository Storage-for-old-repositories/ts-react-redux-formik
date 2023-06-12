import React from "react";
import { PageSelector } from "../../ui";
import { UserWindow } from "./UserWindow";
import { CarWindow } from "./CarWindow";

const Base: React.FC = (props) => {
  return (
    <>
      <PageSelector />
      <br />
      <UserWindow />
      <br />
      <CarWindow />
    </>
  );
};

export default React.memo(Base);
