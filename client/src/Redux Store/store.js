import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../Redux Store/features/toggleSlice';
import formReducer from '../Redux Store/features/formSlice'
export default configureStore({
  reducer: {
    toggle: toggleReducer,
    form: formReducer
  },
});