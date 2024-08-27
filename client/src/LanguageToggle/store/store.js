// store.js
import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../LanguageSlice';
import cartReducer from '../cartSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    cart: cartReducer,
  },
});
