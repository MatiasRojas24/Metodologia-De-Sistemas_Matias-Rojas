import { ChangeEvent, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Form.module.css';
import { formSchema } from '../../schemas/formSchema';
import Swal from 'sweetalert2';

interface IFormValues {
    name: string;
    email: string;
    pass: string;
    confirmPass: string;
}
const initialState: IFormValues = {
    name: "",
    email: "",
    pass: "",
    confirmPass: ""
}
export const Form = () => {
    const [formValues, setFormValues] = useState<IFormValues>(initialState)
    const [errors, setErrors] = useState<Partial<IFormValues>>({});

    const handleChange = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormValues((prev) => ({ ...prev, [`${name}`]: value }))
        try {
            await formSchema.validateAt(name, { ...formValues, [name]: value });
            setErrors(prev => ({ ...prev, [name]: undefined }));
        } catch (err: any) {
            setErrors(prev => ({ ...prev, [name]: err.message }));
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await formSchema.validate(formValues, { abortEarly: false });
            Swal.fire('Formulario enviado correctamente', '', 'success');
            setFormValues(initialState);
            setErrors({});
        } catch (err: any) {
            const newErrors: Partial<IFormValues> = {};
            err.inner.forEach((validationError: any) => {
                newErrors[validationError.path as keyof IFormValues] = validationError.message;
            });
            setErrors(newErrors);
        }
    }

    const hasErrors = Object.values(errors).some(error => error);

    return (
        <div className={styles.containerForm}>
            <form onSubmit={handleSubmit}>
                <h2>Formulario - Manejo de errores</h2>
                <div className={styles.inputContainer}>
                    <Input
                        label={'Nombre'}
                        name={'name'}
                        value={formValues.name}
                        handleOnChange={handleChange}
                        error={errors.name}
                    />
                    <Input
                        label={'Correo'}
                        name={'email'}
                        value={formValues.email}
                        type={'email'}
                        handleOnChange={handleChange}
                        error={errors.email}
                    />
                    <Input
                        label={'Contraseña'}
                        name={'pass'}
                        value={formValues.pass}
                        type={'password'}
                        handleOnChange={handleChange}
                        error={errors.pass}
                    />
                    <Input
                        label={'Confirmar Contraseña'}
                        name={'confirmPass'}
                        value={formValues.confirmPass}
                        type={'password'}
                        handleOnChange={handleChange}
                        error={errors.confirmPass}
                    />
                </div>
                <div className={styles.submitContainer}>
                    <Button type={'submit'} text={'Enviar'} disabled={hasErrors || Object.values(formValues).some(val => val === '')} />
                </div>
            </form>
        </div>
    );
};

export default Form;
