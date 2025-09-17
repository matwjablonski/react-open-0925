const Form = ({ onSubmit, children, ...rest }) => {
    return (
        <form onSubmit={onSubmit} {...rest}>
            {children}
            <button type="submit">Wyślij</button>
       </form>
    );
}

export default Form;