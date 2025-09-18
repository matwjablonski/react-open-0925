import { useRef } from "react";

export const LoginForm = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log({
                username: usernameRef.current.value,
                password: passwordRef.current.value
            });
        }}>
            <input type="text" name="username" placeholder="Nazwa użytkownika" ref={usernameRef} />
            <input type="password" name="password" placeholder="Hasło" ref={passwordRef} />
            <button type="submit">Zaloguj</button>
        </form>
    )
}