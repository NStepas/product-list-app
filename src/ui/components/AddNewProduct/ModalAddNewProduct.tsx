import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { AddNewProduct } from './AddNewProduct';
import { IBackdrop, IModalContext } from '../../../models';

import '../../assets/styles/styles.scss';
import './ModalAddNewProduct.scss';


const Backdrop = (props:IBackdrop) => {
   return <div className="backdrop" onClick={props.onClose} />;
};

const portalElement = document.getElementById('add-new-product');

const Modal = (props:IModalContext) => {
   const { onClose } = props;
   return (
      <Fragment>
         {ReactDOM.createPortal(<Backdrop className="backdrop" onClose={onClose} />, portalElement as HTMLElement)}
         {ReactDOM.createPortal(
            <AddNewProduct className="add-new-product-form" onClose={onClose}/>,
            portalElement as HTMLElement
         )}
      </Fragment>
   );
};

export default Modal;
