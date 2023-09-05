import { InputBase } from '@mui/material';
import { IInput } from '../../../models';
import './Input.scss';

export const Input = ({ formik, name, type, text, autoComplete, disabled }:IInput) => (
   <div className="input">
      <InputBase
         id={name}
         name={name}
         type={type}
         disabled={disabled}
         autoComplete={autoComplete}
         onChange={formik.handleChange }
         onBlur={formik.handleBlur}
         value={formik.values[name]}
         placeholder={text}      />
      {formik.errors[name] && <p className="error">{formik.errors[name]}</p>}
   </div>
);

