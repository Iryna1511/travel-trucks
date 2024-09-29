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
    location: "",
    vehicleType: "",
    vehicleEquipment: [],
  },
  reducers: {
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
});

export const { setLocation, setVehicleType, toggleEquipment } =
  filterSlice.actions;
export default filterSlice.reducer;
