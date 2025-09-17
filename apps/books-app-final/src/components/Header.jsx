const Header = ({ name }) => {
    return (
        <div>
            <h1>Witaj w aplikacji książkowej {name}</h1>
        </div>
    )
}

Header.defaultProps = {
    name: 'Nieznajomy'
}

export default Header;