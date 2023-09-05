import { useEffect } from 'react';

import { HeadBarProps } from '../../../models';

import {Input} from '../Input/Input';
import {Button} from '../Button/Button';

import { FormikValues, useFormik } from 'formik';
import { FormikProvider } from 'formik';
import { initialValues, validate } from './formValidation';

import './AddNewProduct.scss';


export const AddNewProduct = ({ onClose }: HeadBarProps) => {

   const handleSubmit = async (values:FormikValues) => {
      if (values) {
         return values;
      }  else {
         return false;
      }
   };

   const formik = useFormik({
      initialValues,
      validationSchema: validate,
      onSubmit: handleSubmit,
   });

   useEffect(() => {
      const close = (e:KeyboardEvent) => {
         if (e.key === 'Escape') {
            onClose();
         }
         if (e.key === 'Submit') {
            formik.handleSubmit();
         }
      };
      window.addEventListener('keydown', close);
      return () => window.removeEventListener('keydown', close);
   }, []);

   return (
      <FormikProvider value={formik}>
         <form onSubmit={formik.handleSubmit} className="add-new-product-form">
            <h1>{'Add New Product'}</h1>
            <Input formik={formik} name="name" type="string" text="Product" />
            <Input formik={formik} name="author" type="text" text="Author" />
            <Input formik={formik} name="year" type="number" text="Year of establishment" />
            <Input formik={formik} name="rate" type="number" text="Rate" />
            <Button type="submit" text={'Add New Product'} />
            <Button type="button" text={'Cancel'} onClick={onClose} />
         </form>
      </FormikProvider>
   );
};