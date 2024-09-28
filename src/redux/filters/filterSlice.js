import { createSlice } from "@reduxjs/toolkit";

// const handlePending = (state) => {
//   state.isLoading = true;
//   state.isError = false;
// };
// const handleRejected = (state) => {
//   state.isLoading = false;
//   state.isError = true;
// };

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    currentPage: 1,
  },
  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

export default filterSlice.reducer;
