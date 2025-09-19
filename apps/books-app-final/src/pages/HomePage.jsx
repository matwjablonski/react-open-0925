import { useSelector } from "react-redux";

export const HomePage = () => {
    const { user } = useSelector(state => state.user);
    console.log('HomePage render', user);

    return (
        <div>
            <h2>Jakie książki chcesz przeczytać {user ? user.name : 'Nieznajomy'}?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor nihil quos optio dolore provident!</p>
        </div>
    )
};