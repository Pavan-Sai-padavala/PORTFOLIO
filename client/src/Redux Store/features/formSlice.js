import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: 'None',
  reducers: {
    formState: (state, action) => {
        if(action.payload=='Email Sent Succesfully ')
          return 'mailSent';
        if(action.payload=='Error Sending Email')
          return 'Error';
        if(action.payload=='formReset')
          return action.payload;
      },
  },
});

export const { formState } = formSlice.actions;

export default formSlice.reducer;