import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../Redux Store/features/toggleSlice';

export default configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});