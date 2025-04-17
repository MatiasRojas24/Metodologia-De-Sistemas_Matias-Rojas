import styles from './Input.module.css';

interface InputProps {
    label: string;
    value: string;
    name: string;
    type?: string;
    error?: string;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ label, value, name, type, handleOnChange, error }: InputProps) => {
    return (
        <div className={styles.containerInput}>
            <label htmlFor={name}><b>{label}</b></label>
            <hr />
            <div className={styles.inputWrapper}>
                <input className={styles.gradientInput} name={name} value={value} type={type} onChange={handleOnChange} />
            </div>
            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    );
};

export default Input;