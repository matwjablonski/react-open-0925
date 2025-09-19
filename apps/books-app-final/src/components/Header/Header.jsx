import { useContext, useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { Nav } from "../Nav/Nav";
import { StyledAvatar } from "./Header.styled";
import { Modal } from "../Modal/Modal";
import { UserContext } from "../../context/UserContext";

const Header = ({ name, children, isAuth }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useContext(UserContext);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            {isAuth ? <StyledAvatar src="https://placehold.co/150" alt={user.name} /> : <button onClick={() => setIsModalOpen(true)}>Zaloguj</button>}
            <Nav />
            <h1>Witaj w aplikacji książkowej {name}</h1>
            {children}
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