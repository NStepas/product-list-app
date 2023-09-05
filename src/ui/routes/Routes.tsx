import { Routes, Route, Navigate } from 'react-router-dom';

import { PRODUCT_LIST_ROUTE } from '../../constants/routes';

import { ProductList } from '../pages/ProductList';

const AppRoutes = () => (
   <Routes>
      <Route path="*" element={ <Navigate to={PRODUCT_LIST_ROUTE} />} />
      <Route path={PRODUCT_LIST_ROUTE} element={<ProductList />} />
   </Routes>
);

export default AppRoutes;
