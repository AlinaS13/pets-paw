import { createSlice } from "@reduxjs/toolkit";
import { getAllBreeds, getBreedById } from "./breedsOperation";

const initialState = {
  breeds: [],
  filteredBreeds: [],
  isLoading: false,
};

export const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllBreeds.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(getAllBreeds.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.breeds = actions.payload;
      })
      .addCase(getAllBreeds.rejected, (state, actions) => {
        state.isLoading = false;
      })
      .addCase(getBreedById.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(getBreedById.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.filteredBreeds = actions.payload;
      })
      .addCase(getBreedById.rejected, (state, actions) => {
        state.isLoading = false;
      });
  },
});

export default breedsSlice.reducer;
