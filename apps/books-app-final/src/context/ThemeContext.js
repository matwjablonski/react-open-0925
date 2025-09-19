import { createContext } from "react";

export const ThemeContext = createContext('light');

export const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;