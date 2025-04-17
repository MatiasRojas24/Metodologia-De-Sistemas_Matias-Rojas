import styles from './Button.module.css';

interface ButtonProps {
    type: 'button' | 'submit';
    text: string;
    disabled: boolean;
}

const Button = ({ type, text, disabled }: ButtonProps) => {
    return (
        <button disabled={disabled} className={styles.button} type={type}>
            {text}
        </button>
    );
};

export default Button;
