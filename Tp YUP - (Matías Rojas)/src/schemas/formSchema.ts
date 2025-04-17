import * as yup from 'yup';

export const formSchema = yup.object().shape({
    name: yup.string().required('El nombre es obligatorio').min(3, 'Mínimo 3 caracteres'),
    email: yup.string().required('El correo es obligatorio').email('Correo inválido'),
    pass: yup.string().required('La contraseña es obligatoria').min(6, 'Mínimo 6 caracteres'),
    confirmPass: yup.string().required('Debes repetir la contraseña')
        .oneOf([yup.ref('pass')], 'Las contraseñas no coinciden'),
});