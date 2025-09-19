import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../../context/UserContext";

export const ProtectedRoute = ({ children }) => {
    const { isAuth } = useContext(UserContext);

    if (!isAuth) {
        return <Navigate to="/access-denied" replace />;
    }

    return children
}