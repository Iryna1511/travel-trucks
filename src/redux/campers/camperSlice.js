import { createSlice } from "@reduxjs/toolkit";
import { fetchById, fetchCampers } from "./camperOperations";

const handlePending = (state) => {
  state.isLoading = true;
  state.isError = false;
};
const handleRejected = (state) => {
  state.isLoading = false;
  state.isError = true;
};

const camperSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
    camper: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.isLoading = false;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchById.pending, handlePending)
      .addCase(fetchById.fulfilled, (state, action) => {
        state.camper = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchById.rejected, handleRejected);
  },
});

export default camperSlice.reducer;
