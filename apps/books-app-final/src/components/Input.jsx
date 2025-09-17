const Input = ({ value, onChange, type = "text", label, ...rest }) => {

    const elementToRender = type === 'textarea' 
        ? <textarea value={value} onChange={onChange} {...rest} /> 
        : <input type={type} value={value} onChange={onChange} {...rest} />;



    return (
        <label>
            {label}
            {elementToRender}
        </label>
    );
}

export default Input;