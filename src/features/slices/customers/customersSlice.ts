import { Customer } from "../../api/customers";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const customersSlices = createSlice({
  name: "customers",
  initialState: {
    customers: [] as Customer[],
  },
  reducers: {
    addCustomers(state, action: PayloadAction<Customer[]>) {
      state.customers.push(...action.payload);
    },
  },
});

export const { addCustomers } = customersSlices.actions;
export default customersSlices.reducer;
