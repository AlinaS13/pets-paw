// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// // const API_KEY =
// //   "live_zKKAQAAOWv4d0YJuQnDtVtGaM810smait1yGNTfjgzKPDqdMs2VlksWRqXsZ9j1k";
// axios.defaults.baseURL = "https://api.thecatapi.com/v1";
// axios.defaults.headers.common["x-api-key"] =
//   "live_zKKAQAAOWv4d0YJuQnDtVtGaM810smait1yGNTfjgzKPDqdMs2VlksWRqXsZ9j1k";

// export const getBreedsByName = createAsyncThunk(
//   "search/getBreedsByName",
//   async (query, thunkAPI) => {
//     try {
//       const response = await axios(
//         `/images/search?limit=10&breed_ids=${query}`
//       );
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e);
//     }
//   }
// );

// export const getAllBreeds = createAsyncThunk(
//   "get/getAllBreeds",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios(`/images/search?limit=100&breed`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e);
//     }
//   }
// );
