import React from "react";
import { PageSelector } from "../ui";

const Main: React.FC = (props) => {
  return (
    <div>
      <PageSelector />
      <h1>Hello World</h1>
    </div>
  );
};

export default React.memo(Main);
