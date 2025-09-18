import { LoginForm } from "../LoginForm/LoginForm";
import { Nav } from "../Nav/Nav";
import { StyledAvatar } from "./Header.styled";

const Header = ({ name, children }) => {
    return (
        <div>
            <StyledAvatar src="https://placehold.co/150" />
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