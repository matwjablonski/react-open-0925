import { useState } from "react";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import store from "./store/store";

export const Providers = ({ children }) => {
//  const [isAuth, setIsAuth] = useState(false);
//   const [user, setUser] = useState({});
  const [theme, setTheme] = useState('light');

    return (
        <Provider store={store}>
            <ThemeContextProvider value={{ theme, setTheme }}>
                {children}
            </ThemeContextProvider>
        </Provider>
    )
};