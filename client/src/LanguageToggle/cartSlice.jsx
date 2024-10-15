import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state, action) {
      state.isCartOpen = !state.isCartOpen; // Toggle cart visibility
    },

    addItem(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },

    incrementItem(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) item.quantity++;
    },
    
    decrementItem(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        }
      }
    },
  },
});

export const { toggleCart, addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;
