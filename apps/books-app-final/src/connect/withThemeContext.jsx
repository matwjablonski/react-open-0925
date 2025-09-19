import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const withThemeContext = (ComponentToRender) => {
    return function WrappedComponent(props) {
        const { theme, setTheme } = useContext(ThemeContext);

        return <ComponentToRender {...props} theme={theme} setTheme={setTheme} />
    }
}