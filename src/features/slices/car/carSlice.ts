import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const carSlices = createSlice({
  name: "car",
  initialState: {
    name: "BAZ",
    model: "2107",
  },
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setModel(state, action: PayloadAction<string>) {
      state.model = action.payload;
    },
  },
});

export const { setModel, setName } = carSlices.actions;
export default carSlices.reducer;
