import { LoginForm } from "./LoginForm";

const Header = ({ name, children }) => {
    return (
        <div>
            <LoginForm />
            <h1>Witaj w aplikacji książkowej {name}</h1>
            {children}
        </div>
    )
}

Header.defaultProps = {
    name: 'Nieznajomy'
}

export default Header;