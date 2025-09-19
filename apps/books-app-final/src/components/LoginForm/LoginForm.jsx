import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../slices/User.slice";

export const LoginForm = ({ onLogin }) => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log({
                username: usernameRef.current.value,
                password: passwordRef.current.value
            });
            dispatch(login({
                name: usernameRef.current.value,
            }));
            onLogin();
        }}>
            <input type="text" name="username" placeholder="Nazwa użytkownika" ref={usernameRef} />
            <input type="password" name="password" placeholder="Hasło" ref={passwordRef} />
            <button type="submit">Zaloguj</button>
        </form>
    )
}