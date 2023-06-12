import { PageSelector } from "../../ui";
import * as React from "react";

const Base: React.FC = (props) => {
  return (
    <>
      <PageSelector />
      <h1>Hello [FormikBase]</h1>
    </>
  );
};

export default React.memo(Base);
