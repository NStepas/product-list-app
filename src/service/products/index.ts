import { apiService } from '../apiService';

import {
   GET_PRODUCT_URL,
} from '../../constants/url';

export const getProducts = () => {
   return apiService(`${GET_PRODUCT_URL}`, 'GET');
};
