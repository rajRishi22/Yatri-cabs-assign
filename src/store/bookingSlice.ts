import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'outstation',
  tripType: 'one-way', // Default for Outstation
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
      if (action.payload !== 'outstation') state.tripType = 'one-way'; // Reset trip type for non-Outstation
    },
    setTripType(state, action) {
      state.tripType = action.payload;
    },
  },
});

export const { setActiveTab, setTripType } = bookingSlice.actions;
export default bookingSlice.reducer;
