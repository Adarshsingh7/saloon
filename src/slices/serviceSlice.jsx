import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
  service: null,
  loading: false,
};

const serviceSlice = createSlice({
  name: "service",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setServices: (state, action) => {
      state.services = action.payload;
      state.loading = false;
    },
    setService: (state, action) => {
      state.service = action.payload;
      state.loading = false;
    },
    addService: (state, action) => {
      state.services.push(action.payload);
      state.loading = false;
    },
    updateService: (state, action) => {
      const index = state.services.findIndex(
        (service) => service.id === action.payload.id
      );
      if (index !== -1) {
        state.services[index] = action.payload;
      }
      state.loading = false;
    },
    removeService: (state, action) => {
      state.services = state.services.filter(
        (service) => service.id !== action.payload
      );
      state.loading = false;
    },
  },
});

export const {
  setLoading,
  setServices,
  setService,
  addService,
  updateService,
  removeService,
} = serviceSlice.actions;
export default serviceSlice.reducer;
