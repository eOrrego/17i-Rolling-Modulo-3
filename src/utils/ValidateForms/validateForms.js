import * as yup from 'yup';

export const schemaFormRegister = yup.object().shape({
  firstName: yup.string().required('Campo obligatorio'),
  lastName: yup.string(),
  email: yup.string().email('El mail es inválido').required('Campo obligatorio'),
  password: yup
    .string()
    .required('Campo obligatorio')
    .min(8, 'Debe tener minimo 8 caracteres')
    .matches(/[a-zA-Z]/, 'Debe tener minuculas y mayúsculas'),
  terms: yup.bool().required().oneOf([true], 'Debés aceptar los terminos y condiciones'),
});
