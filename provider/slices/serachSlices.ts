import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "serach",
  initialState: "",
  reducers: {
    setSearch(state, payload) {
      return (state = payload.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
