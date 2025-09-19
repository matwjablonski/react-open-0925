import { Navigate } from "react-router";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
    const isAuth = useSelector(state => state.user.isAuth);

    if (!isAuth) {
        return <Navigate to="/access-denied" replace />;
    }

    return children
}