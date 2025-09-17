import { LoginForm } from "./LoginForm";

const Header = ({ name }) => {
    return (
        <div>
            <LoginForm />
            <h1>Witaj w aplikacji książkowej {name}</h1>
        </div>
    )
}

Header.defaultProps = {
    name: 'Nieznajomy'
}

export default Header;