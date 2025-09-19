import { Link } from "react-router"
import { Modal } from "../Modal/Modal"

export const Nav = () => {

    return (
        <nav className="navbar">
            <Link to="/">Strona główna</Link>
            <Link to="/readers">Czytelnicy</Link>
            <Link to="/books">Książki</Link>
            <Link to="/contact">Kontakt</Link>
            <Modal open={true} />
        </nav>
    )
}