import * as Yup from 'yup';
import { IS_REQUIRED, TEXT_LENGTH, POSITIVE_NUMBER } from '../../../constants/formTexts';

const initialValues = {
   name: '',
   author: '',
   establishmentYear: '',
   rating: '',
};


const validate = Yup.object({
   name: Yup.string().min(1, TEXT_LENGTH).max(30, TEXT_LENGTH).required(IS_REQUIRED),
   author: Yup.string().required(IS_REQUIRED),
   establishmentYear: Yup.number().required(IS_REQUIRED).positive(POSITIVE_NUMBER),
   rating: Yup.number().required(IS_REQUIRED).positive(POSITIVE_NUMBER),
});

export { initialValues, validate };
