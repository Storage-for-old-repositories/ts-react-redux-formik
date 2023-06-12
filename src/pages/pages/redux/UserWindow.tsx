import React, { useCallback } from "react";
import { userSlice, useAppDispatch, useAppSelector } from "@/features";

export const UserWindow = React.memo(() => {
  const { name, age } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onChangeAge = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(userSlice.setAge(+e.target.value));
    },
    [dispatch]
  );

  const onChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(userSlice.setName(e.target.value));
    },
    [dispatch]
  );

  return (
    <div>
      <h1>
        Привет {name}, тебе уже {age} лет!
      </h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={onChangeName}></input>
      <label htmlFor="age">Age</label>
      <input type="number" id="age" value={age} onChange={onChangeAge}></input>
    </div>
  );
});
