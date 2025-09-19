import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const HomePage = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h2>Jakie książki chcesz przeczytać {user.name || "Nieznajomy"}?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor nihil quos optio dolore provident!</p>
        </div>
    )
};