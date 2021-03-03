import yup from '../utils/yup';
import { INVALID_EMAIL, REQUIRED_FIELD } from '../utils/constants';

export const validationSchema = yup.object().shape({
  email: yup.string().email(INVALID_EMAIL).required(REQUIRED_FIELD),
  password: yup.string().required(REQUIRED_FIELD),
});

export default { email: '', password: '' };
