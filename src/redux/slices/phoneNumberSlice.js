import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  phoneNumber: null,
};

export const phoneNumberSlice = createSlice({
  name: 'phoneNumber',
  initialState,
  reducers: {
    addPhoneNumber(state, action) {
      let phoneNumber = action.payload;
      state.phoneNumber = phoneNumber;
    },
  },
});

export const {addPhoneNumber} = phoneNumberSlice.actions;

export default phoneNumberSlice.reducer;
