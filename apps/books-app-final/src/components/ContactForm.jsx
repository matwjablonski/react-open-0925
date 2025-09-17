import { useState } from "react"
import Form from "./Form"
import Input from "./Input"

export const ContactForm = () => {
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

    return (
        <Form onSubmit={handleSubmit}>
            <Input 
                placeholder="Imię" 
                name="name" 
                onChange={handleFormChange} 
                value={formData.name} label="Imię"
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