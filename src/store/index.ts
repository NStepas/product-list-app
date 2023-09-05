import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { products } from './products';


const store = configureStore({
  reducer: { products : products.reducer},
  middleware:[thunk],
});

export default store;