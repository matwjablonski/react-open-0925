import { createContext } from "react";

export const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => {}
});


export const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;