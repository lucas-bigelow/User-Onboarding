import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Please enter a name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Please enter an email address'),
  password: yup
    .string()
    .required('Please enter a password'),
  terms: yup
    .boolean()
})

export default formSchema;