import { useState } from "react";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserContextProvider } from "./context/UserContext";
import { Provider } from "react-redux";
import store from "./store/store";

export const Providers = ({ children }) => {
 const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState('light');

  const handleLogin = () => {
    setIsAuth(true);
    setUser({ name: 'Mateusz' });
  }

    return (
        <Provider store={store}>
            <ThemeContextProvider value={{ theme, setTheme }}>
                <UserContextProvider value={{ isAuth, handleLogin, user }}>
                    {children}
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    )
};