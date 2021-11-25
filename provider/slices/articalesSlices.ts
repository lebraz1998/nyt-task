import { createSlice } from "@reduxjs/toolkit";
import { Doc } from "../../types/articles.types";

export const articalesSlice = createSlice({
  name: "articales",

  initialState: {
    loading: true,
    update: false,
    page: 0,
    articales: [] as Doc[],
    rest: false,
    search: "",
  },
  reducers: {
    setSearch(state, payload) {
      state.search = payload.payload;
      state.loading = true;
      state.rest = true;
      state.page = 0;
      return state;
    },

    setArticales(state, payload) {
      if (state.rest || state.loading) {
        state.articales = payload.payload;
        state.rest = false;
      } else if (state.update) {
        state.articales = state.articales.concat(payload.payload);
        state.update = false;
      }

      state.loading = false;
      return state;
    },
    setPage(state) {
      console.log(state);
      state.page += 1;
      state.update = true;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPage, setArticales, setSearch } = articalesSlice.actions;

export default articalesSlice.reducer;
