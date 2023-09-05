import { createAction } from '@reduxjs/toolkit';

export const addSelectedProduct = createAction('products/addSelectedProduct');

export const removeProduct = createAction('products/removeProduct');
