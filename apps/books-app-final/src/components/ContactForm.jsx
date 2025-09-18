import { useRef, useState } from "react"
import Form from "./Form"
import Input from "./Input"

export const ContactForm = () => {
    const focusableInputRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    })

    const handleFormChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const handleWriteToUsClick = () => {
        if (focusableInputRef.current) focusableInputRef.current.focus();
    } 

    return (
        <Form onSubmit={handleSubmit}>
            <button type='button' onClick={handleWriteToUsClick}>Napisz do nas</button>
            <Input 
                placeholder="Imię" 
                name="name" 
                onChange={handleFormChange} 
                value={formData.name} label="Imię"
                ref={focusableInputRef}
            />
            <Input 
                placeholder="Numer telefonu" 
                name="phone" 
                onChange={handleFormChange} 
                value={formData.phone} label="Numer telefonu"
            />
            <Input 
                type="textarea" 
                placeholder="Wiadomość" 
                name="message" 
                onChange={handleFormChange} 
                value={formData.message}
                label="Wiadomość" 
            />
        </Form>
    )
}
