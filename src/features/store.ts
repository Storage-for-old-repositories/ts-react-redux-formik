import { useDispatch, useSelector } from "react-redux";

import { userSlice, carSlice, customersSlice } from "@/features";
import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./api";

export const store = configureStore({
  reducer: {
    user: userSlice.default,
    car: carSlice.default,
    customers: customersSlice.default,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: <T>(selector: (state: RootState) => T) => T =
  useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
