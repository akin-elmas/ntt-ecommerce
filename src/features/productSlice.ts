import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Product } from "../globalTypes";

const initialState: Product[] = [];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // type string
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export const selectProducts = (state: RootState) => state.product;
export default productSlice.reducer;
