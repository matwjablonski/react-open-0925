import { LoginForm } from "../LoginForm/LoginForm";
import { Nav } from "../Nav/Nav";

const Header = ({ name, children }) => {
    return (
        <div>
            <LoginForm />
            <Nav />
            <h1>Witaj w aplikacji książkowej {name}</h1>
            {children}
        </div>
    )
}

Header.defaultProps = {
    name: 'Nieznajomy'
}

export default Header;