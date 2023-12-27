import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState: 'None',
  reducers: {
    toggleState: (state, action) => {
        if(state ===action.payload)
          return 'None'
        return action.payload;
      },
  },
});

export const { toggleState } = toggleSlice.actions;

export default toggleSlice.reducer;
