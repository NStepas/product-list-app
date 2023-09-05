import { ButtonBase } from '@mui/material';

import { IButton } from '../../../models';

import './Button.scss';

export const Button = ({ type, text, onClick, isActive, className='' }: IButton) => (
  <> {console.log(isActive)}
   <ButtonBase type={type} onClick={onClick} className={isActive}>
      {text}
   </ButtonBase></>
);

