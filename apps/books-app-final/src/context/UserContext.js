import { createContext } from "react";

const UserContext = createContext({
    user: null,
    isAuth: false,
});

const UserContextProvider = UserContext.Provider;
const UserContextConsumer = UserContext.Consumer;

export { UserContext, UserContextProvider, UserContextConsumer };