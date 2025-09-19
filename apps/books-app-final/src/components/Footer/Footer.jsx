import { withThemeContext } from "../../connect/withThemeContext";

const Footer = ({ theme }) => {
    return (
        <footer>
            <p>Aktualny motyw: {theme}</p>
            Aplikacja przygotowana przez Mateusz Jabłoński
        </footer>
    )
}

const FooterWithTheme = withThemeContext(Footer);

export default FooterWithTheme;

