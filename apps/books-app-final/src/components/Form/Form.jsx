import { StyledButton } from '../Button/Button';
import styles from './Form.module.css';

const Form = ({ onSubmit, children, ...rest }) => {
    return (
        <form onSubmit={onSubmit} {...rest} className={styles.form}>
            {children}
            <StyledButton type="submit">Wyślij</StyledButton>
       </form>
    );
}

export default Form;