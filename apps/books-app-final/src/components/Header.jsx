import { LoginForm } from "./LoginForm";
import { Nav } from "./Nav";

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