// import { createSlice } from "@reduxjs/toolkit";
// import { getBreedsByName } from "./searchOperation";

// const initialState = {
//   breeds: [],
//   isLoading: false,
// };

// export const searchSlice = createSlice({
//   name: "breeds",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(getBreedsByName.pending, (state, actions) => {
//         state.isLoading = true;
//       })
//       .addCase(getBreedsByName.fulfilled, (state, actions) => {
//         state.isLoading = false;
//         state.breeds = actions.payload;
//       })
//       .addCase(getBreedsByName.rejected, (state, actions) => {
//         state.isLoading = false;
//       });
//   },
// });

// export default searchSlice.reducer;
