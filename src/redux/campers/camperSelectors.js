export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.isError;
export const selectCamperWithId = (state) => state.campers.camper;
