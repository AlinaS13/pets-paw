import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] =
  "live_zKKAQAAOWv4d0YJuQnDtVtGaM810smait1yGNTfjgzKPDqdMs2VlksWRqXsZ9j1k";

export const addVotingFetch = createAsyncThunk(
  "voting/addVotingFetch",
  async ({ image_id, sub_id, value }, thunkAPI) => {
    try {
      const response = await axios.post(`/votes`, {
        image_id,
        sub_id,
        value,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getAllVotingFetch = createAsyncThunk(
  "voting/allVotingFetch",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/votes?limit=10&order=DESC`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const addFavouritesFetch = createAsyncThunk(
  "favourites/addFavouritesFetch",
  async ({ image_id, sub_id }, thunkAPI) => {
    try {
      const response = await axios.post(`/favourites`, {
        image_id,
        sub_id,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getAllFavouritesFetch = createAsyncThunk(
  "favourites/getAllFavouritesFetch",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/favourites?limit=10&order=DESC`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
