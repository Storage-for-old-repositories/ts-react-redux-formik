import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
  name: "user",
  initialState: {
    name: "Artyom",
    age: 24,
  },
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setAge(state, action: PayloadAction<number>) {
      state.age = action.payload;
    },
  },
});

export const { setAge, setName } = userSlices.actions;
export default userSlices.reducer;
