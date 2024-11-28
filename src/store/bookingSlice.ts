
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingDetails {
  from: string;
  to: string;
  pickUpDate: string;
  returnDate: string;
  pickUpAt?: string; // Optional field
}

interface BookingState {
  activeTab: 'outstation' | 'local' | 'airport';
  tripType: 'one-way' | 'round-trip';
  bookingDetails: BookingDetails;
}

const initialState: BookingState = {
  activeTab: 'outstation',
  tripType: 'one-way',
  bookingDetails: {
    from: '',
    to: '',
    pickUpDate: '',
    returnDate: '',
  },
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<'outstation' | 'local' | 'airport'>) {
      state.activeTab = action.payload;
    },
    setTripType(state, action: PayloadAction<'one-way' | 'round-trip'>) {
      state.tripType = action.payload;
    },
    setBookingDetails(state, action: PayloadAction<Partial<BookingDetails>>) {
      state.bookingDetails = { ...state.bookingDetails, ...action.payload };
    },
  },
});

export const { setActiveTab, setTripType, setBookingDetails } = bookingSlice.actions;
export default bookingSlice.reducer;
