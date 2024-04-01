import { createSlice } from '@reduxjs/toolkit';

const formStateMap = {
  'Email Sent Successfully': 'mailSent',
  'Error Sending Email': 'Error',
  "formReset": "None",
};

export const formSlice = createSlice({
  name: 'form',
  initialState: 'None',
  reducers: {
    formState: (state, action) => formStateMap[action.payload] || state,
  },
});

export const { formState } = formSlice.actions;

export default formSlice.reducer;
