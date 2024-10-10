import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    portfolioData: null,
    loading: false // Add loading flag to the state
  },
  reducers: {
    SetPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
    ShowLoading: (state) => {
      state.loading = true; // Set loading to true
    },
    HideLoading: (state) => {
      state.loading = false; // Set loading to false
    }
  }
});

export default rootSlice.reducer;
export const { ShowLoading, HideLoading, SetPortfolioData } = rootSlice.actions;
