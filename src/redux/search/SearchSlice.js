import { createSlice } from "@reduxjs/toolkit";
import { fetchRandomCats } from "./searchOperation";

const initialState = {
  search: [],
  isLoading: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomCats.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(fetchRandomCats.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.search = actions.payload;
      })
      .addCase(fetchRandomCats.rejected, (state, actions) => {
        state.isLoading = false;
      });
  },
});

export default searchSlice.reducer;
