import React, { useCallback } from "react";
import { carSlice, useAppDispatch, useAppSelector } from "@/features";

export const CarWindow = React.memo(() => {
  const { name, model } = useAppSelector((state) => state.car);
  const dispatch = useAppDispatch();

  const onChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(carSlice.setName(e.target.value));
    },
    [dispatch]
  );

  const onChangeModel = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(carSlice.setModel(e.target.value));
    },
    [dispatch]
  );

  return (
    <div>
      <h1>
        Твоя тачка {name} модели {model}
      </h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={onChangeName}></input>
      <label htmlFor="model">Model</label>
      <input
        type="text"
        id="model"
        value={model}
        onChange={onChangeModel}
      ></input>
    </div>
  );
});
