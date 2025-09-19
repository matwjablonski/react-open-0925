import { useContext, useRef } from "react";
import { UserContext } from "../../context/UserContext";

export const LoginForm = ({ onLogin }) => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const { handleLogin } = useContext(UserContext);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log({
                username: usernameRef.current.value,
                password: passwordRef.current.value
            });
            handleLogin();
            onLogin();
        }}>
            <input type="text" name="username" placeholder="Nazwa użytkownika" ref={usernameRef} />
            <input type="password" name="password" placeholder="Hasło" ref={passwordRef} />
            <button type="submit">Zaloguj</button>
        </form>
    )
}