import { Navigate } from "react-router";

export const ProtectedRoute = ({ isAuth, children }) => {
    if (!isAuth) {
        return <Navigate to="/access-denied" replace />;
    }

    return children
}