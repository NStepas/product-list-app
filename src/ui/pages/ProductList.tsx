import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThunkGetProducts } from '../../store/products/thunks/ThunkProducts';
import { removeProduct } from '../../store/products/actions';

import { Button } from '../components/Button/Button'
import { FetchProducts } from '../components/FetchProducts';
import ModalAddNewProduct from '../components/AddNewProduct/ModalAddNewProduct'

import logo from '../assets/icons/user-logo.svg'

import './ProductList.scss'
import { IRootState } from '../../models';

export const ProductList = () => {
  const dispatch = useDispatch()
  const [cardIsShown, setCardIsShown] = useState(false);
  const productsID = useSelector((state:any) => state.products.selectedProducts);

  const showCardHandler = () => {
    setCardIsShown(true);
 };

 const hideCardHandler = () => {
    setCardIsShown(false);
 };

 const deleteHandler = () =>{
  dispatch(removeProduct(productsID))
 }

  return (
    <div>
      <div className="todoList-page">
       <div className="header">
               <div className="productList-name">
                  <p>ProductList</p>
               </div>
               <div className="add-product-button-holder">
               <Button text='Delete Selected Product' type='button' className='inactive' onClick={deleteHandler}/>
                  <Button
                     onClick={showCardHandler}
                     className="add-button"
                     type='button'
                     text='Add New Product'
                  />
                  <img src={logo} alt={logo} className="logo" />
               </div>
            </div>
            {cardIsShown ? <ModalAddNewProduct onClose={hideCardHandler} /> : null}
            <div className="product-list-container">
                  <FetchProducts ThunkGetProducts={ThunkGetProducts}/>
               </div>
               </div>
      </div>
  )
}
