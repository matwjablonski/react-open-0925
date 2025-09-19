import { memo } from "react"
import { Link } from "react-router"

const Nav = () => {

    return (
        <nav className="navbar">
            <Link to="/">Strona główna</Link>
            <Link to="/readers">Czytelnicy</Link>
            <Link to="/books">Książki</Link>
            <Link to="/contact">Kontakt</Link>
        </nav>
    )
}

export const MemoizedNav = memo(Nav)