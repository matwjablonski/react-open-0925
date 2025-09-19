import { createContext } from "react";

const UserContext = createContext(null);

const UserContextProvider = UserContext.Provider;
const UserContextConsumer = UserContext.Consumer;

export { UserContext, UserContextProvider, UserContextConsumer };