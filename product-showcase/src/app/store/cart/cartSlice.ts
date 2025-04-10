import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of a cart item
interface CartItem {
  id: number;
  name: string;
  src: string;
  price: string;
  content: React.ReactNode;
  // Add other properties as needed (e.g., price: number, quantity: number)
}

// Define the state shape
interface CartState {
  value: CartItem[];
}

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add an item to the cart
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.value.push(action.payload);
    },
    // Remove an item from the cart by id
    removeItem: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter(item => item.id !== action.payload);
    },
    // Optional: Clear the cart
    clearCart: (state) => {
      state.value = [];
    },
  },
});

// Action creators with typed payloads
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;

// Optional: Export the state type for use in hooks
export type { CartState, CartItem };