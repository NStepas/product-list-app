import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {Loader} from '../components/Loader/Loader';
import {SearchProduct} from './SearchProduct';
import { IProductItem, IRootState } from '../../models';


export const FetchProducts = (props:any) => {
   const { ThunkGetProducts } = props;
   const dispatch = useDispatch();
   const [loading, setLoading] = useState(true);

   const productsList = useSelector((state:IRootState) => state.products ? state.products.list : null)

   const onMount = async () => {
      setLoading(true)
      dispatch(ThunkGetProducts())
      .unwrap()
      .finally(() => {
         setLoading(false);
      })
   };

   useEffect(() => {
      onMount();
   }, []);
   return (
      <div>
         {loading ? (
               <Loader />
         ) : (
            <SearchProduct products={productsList as any} />
         )}
      </div>
   );
};


