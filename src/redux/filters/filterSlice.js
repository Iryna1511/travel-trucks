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
    location: "",
    vehicleType: "",
    vehicleEquipment: [],
  },
  reducers: {
    setPage: (state) => {
      state.currentPage += 1;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    toggleEquipment: (state, action) => {
      if (state.vehicleEquipment.includes(action.payload)) {
        state.vehicleEquipment = state.vehicleEquipment.filter(
          (opt) => opt !== action.payload
        );
      } else {
        state.vehicleEquipment.push(action.payload);
      }
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

export const { setPage, setLocation, setVehicleType, toggleEquipment } =
  filterSlice.actions;
export default filterSlice.reducer;
