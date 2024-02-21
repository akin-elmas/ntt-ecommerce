import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Product } from "../globalTypes";
import apiRequest from "../api/request";
import { requestConfig } from "../api/requestConfig";

const initialState: {
  product: Product[];
  favProductsCount: number;
  productShowNumber: number;
  loading: boolean;
  error: string;
} = {
  product: [],
  favProductsCount: 0,
  productShowNumber: 4,
  loading: false,
  error: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProductFavoriteStatus: (state, action) => {
      const productIndex = state.product.findIndex(
        (product) => product.id === action.payload
      );
      state.product[productIndex].favStatus =
        !state.product[productIndex].favStatus;

      if (state.product[productIndex].favStatus) {
        state.favProductsCount += 1;
      } else {
        state.favProductsCount -= 1;
      }
    },

    showMoreProducts: (state) => {
      state.productShowNumber += 4;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ? action.error.message : "Error";
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const extendedProduct = (action.payload as Product[]).map((product) => {
        return {
          ...product,
          favStatus: false,
        };
      });
      state.product = extendedProduct;
    });
  },
});

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const responseData = await apiRequest(requestConfig);
    return responseData;
  }
);

export const { updateProductFavoriteStatus, showMoreProducts } =
  productSlice.actions;
export const selectProducts = (state: RootState) => state.product;
export default productSlice.reducer;
