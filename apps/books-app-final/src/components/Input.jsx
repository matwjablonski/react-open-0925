import { forwardRef } from "react";

const Input = forwardRef(({ value, onChange, type = "text", label, ...rest }, ref) => {

    const elementToRender = type === 'textarea' 
        ? <textarea value={value} onChange={onChange} {...rest} /> 
        : <input type={type} value={value} onChange={onChange} {...rest} ref={ref} />;

    return (
        <label>
            {label}
            {elementToRender}
        </label>
    );
});

export default Input;