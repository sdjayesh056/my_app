import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const STATUSES = {
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },

  // reducers: {
  //   setProduct(state, action) {
  //     state.data = action.payload;
  //   },
  //   setStatus(state, action) {
  //     state.status = action.payload;
  //   },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductCAT.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProductCAT.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.SUCCESS;
      })
      .addCase(fetchProductCAT.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProduct, setStatus } = productSlice.actions;

export default productSlice.reducer;

// Redux Thunks

export const fetchProductCAT = createAsyncThunk("product", async () => {
  const res = await axios.get(`https://fakestoreapi.com/products`);
  return res.data;
});

// export function fetchProduct() {
//   return async function fetchProductThunk(dispatch) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await axios.get(`https://fakestoreapi.com/products`);
//       dispatch(setProduct(res.data));
//       dispatch(setStatus(STATUSES.SUCCESS));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
