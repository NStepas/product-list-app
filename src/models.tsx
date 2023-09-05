import { ActionCreator } from '@reduxjs/toolkit';
import { Url } from 'url';
import { number } from 'yup';

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  stock: boolean;
  category: string;
  thumbnail?: Url;
  discountPercentage?: number;
  brand?: string;
  images?: any;
}

export interface IRate {
    rate: number;
    count?: null | number;
}

export interface IProductItem {
  products: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    rating: {
      rate: number;
      count?: number | null | undefined;
    };
    stock: boolean;
    category: string;
    thumbnail?: Url;
    discountPercentage?: number;
    brand?: string;
    images?: any;
    filter?: ActionCreator<any>
  };
}

export interface ICreateProduct {
  name: string;
  author: string;
  establishingYear: number;
  rating: {
    rate: number;
  };
}

export interface ProductProps {
  product: IProduct;
}

export interface ErrorMessageInterface {
  error: string;
}

export interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export interface IButton {
  type: 'submit' | 'reset' | 'button' | undefined;
  text: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isActive?: string;
  className?: string;
}

export interface IInput {
  formik: any;
  name: string;
  type: string;
  text: string;
  disabled?: boolean;
  autoComplete?: string;
}

export interface IModalContext {
  onClose: () => void;
}

export interface IBackdrop {
  className: string;
  onClose: () => void;
}

export interface IPortalElement {
  portalElement: Element | DocumentFragment | HTMLElement | null;
}

export interface IProductsList {
  filteredProducts?: IProduct[];
  products?: IProduct[];
}

export interface IRootState {
  products?: {
    list?: IProduct[];
    selectedProducts? :IProduct[]
  };

}

export type HeadBarProps = {
    onClose: () => void;
    className? : string
  };