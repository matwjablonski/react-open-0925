import { Link } from "react-router"

export const Nav = () => {

    return (
        <nav>
            <Link to="/">Strona główna</Link>
            <Link to="/readers">Czytelnicy</Link>
            <Link to="/books">Książki</Link>
            <Link to="/contact">Kontakt</Link>
        </nav>
    )
}