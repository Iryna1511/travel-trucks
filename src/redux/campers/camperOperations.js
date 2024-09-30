import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const LIMIT = 4;

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (searchParams, thunkAPI) => {
    const { page, location, form, equipment, transmission } = searchParams;
    try {
      const response = await axios.get("/campers", {
        params: {
          ...equipment,
          transmission: transmission,
          form: form,
          location: location,
          page: page,
          limit: LIMIT,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
