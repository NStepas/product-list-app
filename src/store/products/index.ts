import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import  {ThunkGetProducts}  from './thunks/ThunkProducts';
import { IProduct, IProductsList } from '../../models';

interface IThunkProducts {
   products: IProduct[];
}

const initialState = {
  list: [] as IProduct[],
  selectedProducts: [] as number[],
  loading: false,
  error: null
};

export const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
   addSelectedProduct: (state, action) => {
      console.log(state)
         state.selectedProducts = action.payload 
       }, 
   removeProduct: (state, action) => {
      console.log(action.payload, state)
        state.list = state.list.filter(product => !action.payload.includes(product.id));
      },
  },
  extraReducers: builder => {
   builder
      .addCase(ThunkGetProducts.fulfilled, (state,  action: PayloadAction<IThunkProducts>) => {
         state.loading = false;
         state.list = action.payload.products;
      })
      .addCase(ThunkGetProducts.pending, (state) => {
         state.loading = true;
         state.error = null;
       })
      .addCase(ThunkGetProducts.rejected, (state,  action: PayloadAction<any>) => {
         state.loading = false;
         state.error = action.payload;
      })
  }
});

export default products.reducer