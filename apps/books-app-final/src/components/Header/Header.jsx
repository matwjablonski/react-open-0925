import { useContext, useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { MemoizedNav as Nav } from "../Nav/Nav";
import { StyledAvatar } from "./Header.styled";
import { Modal } from "../Modal/Modal";
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from "../../context/ThemeContext";

const Header = ({ children, welcomeMsg }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user, isAuth } = useContext(UserContext);
    const { theme, setTheme } = useContext(ThemeContext);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            {isAuth ? <StyledAvatar src="https://placehold.co/150" alt={user.name} /> : <button onClick={() => setIsModalOpen(true)}>Zaloguj</button>}
            <Nav />
            {welcomeMsg}
            {children}
            <button onClick={() => setTheme((prev) => prev === 'light' ? 'dark' : 'light')}>Zmień motyw na {theme === 'light' ? 'ciemny' : 'jasny'}</button>
            <Modal open={isModalOpen} onClose={handleCloseModal}>
                <LoginForm onLogin={() => {
                    handleCloseModal();
                }} />
            </Modal>
        </div>
    )
}

Header.defaultProps = {
    name: 'Nieznajomy'
}

export default Header;