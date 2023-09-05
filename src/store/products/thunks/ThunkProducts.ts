import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../../service/index';

export const ThunkGetProducts = createAsyncThunk('products/getProducts', async () => {
   let products = await api.products.getProducts();
   if (products.error) {
      if (products.error.statusCode === '401') {
         return (products = products.error.statusCode);
      } else {
         return (products = products.error.errorMessage);
      }
   }
   
   return products;
});
