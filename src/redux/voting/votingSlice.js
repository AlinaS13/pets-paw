import { createSlice } from "@reduxjs/toolkit";
import {
  addFavouritesFetch,
  addVotingFetch,
  getAllFavouritesFetch,
  getAllVotingFetch,
} from "./votingOperation";

const initialState = {
  voting: [],
  votes: [],
  favourites: [],
  favouritesCat: [],
  isLoading: false,
};

export const votingSlice = createSlice({
  name: "voting",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addVotingFetch.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(addVotingFetch.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.voting = actions.payload;
      })
      .addCase(addVotingFetch.rejected, (state, actions) => {
        state.isLoading = false;
      })
      .addCase(getAllVotingFetch.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(getAllVotingFetch.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.votes = actions.payload;
      })
      .addCase(getAllVotingFetch.rejected, (state, actions) => {
        state.isLoading = false;
      })
      .addCase(addFavouritesFetch.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(addFavouritesFetch.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.favourites = actions.payload;
      })
      .addCase(addFavouritesFetch.rejected, (state, actions) => {
        state.isLoading = false;
      })
      .addCase(getAllFavouritesFetch.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(getAllFavouritesFetch.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.favouritesCat = actions.payload;
      })
      .addCase(getAllFavouritesFetch.rejected, (state, actions) => {
        state.isLoading = false;
      });
  },
});

export default votingSlice.reducer;
