import React from "react";
import { PageSelector } from "../../ui";
import { todosApi } from "@/features";

const Rtk: React.FC = (props) => {
  const { data } = todosApi.useTodosQuery(1);

  return (
    <>
      <PageSelector />
      <h1>Rtk query</h1>
      <div>
        {data && (
          <div>
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.userID}</p>
            <p>{data.completed}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default React.memo(Rtk);
