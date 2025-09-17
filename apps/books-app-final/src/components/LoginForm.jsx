import { useState } from "react";

export const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleFormChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(formData);
        }}>
            <input type="text" value={formData.username} onChange={handleFormChange} name="username" placeholder="Nazwa użytkownika" />
            <input type="password" value={formData.password} onChange={handleFormChange} name="password" placeholder="Hasło" />
            <button type="submit">Zaloguj</button>
        </form>
    )
}