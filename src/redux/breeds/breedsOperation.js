import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// const API_KEY =
//   "live_zKKAQAAOWv4d0YJuQnDtVtGaM810smait1yGNTfjgzKPDqdMs2VlksWRqXsZ9j1k";
axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] =
  "live_zKKAQAAOWv4d0YJuQnDtVtGaM810smait1yGNTfjgzKPDqdMs2VlksWRqXsZ9j1k";

export const getAllBreeds = createAsyncThunk(
  "breeds/getAllBreeds",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`/breeds?limit=20`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getBreedById = createAsyncThunk(
  "filteredBreeds/getBreedById",
  async (breedId, thunkAPI) => {
    try {
      const response = await axios(
        `/images/search?limit=20&breed_ids=${breedId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
