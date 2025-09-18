import { useState } from "react";
import { Vote } from "./Vote";

export const Book = ({ title, author, publicationDate, onRemove, ...rest }) => {
    const [isRead, setIsRead] = useState(false);

    const toggleReadStatus = () => {
        setIsRead((prev) => !prev);
    }

    // if (rest.hide) {
    //     return null;
    // }

    return !rest.hide ? (
        <li {...rest}>
            <Link to={`/books/${rest.id}`}>
                {title} [{isRead ? '✔️' : '❌'}] - {author} ({publicationDate})
            </Link>
            <button onClick={toggleReadStatus}>{isRead ? 'Usuń z przeczytanych' : 'Dodaj do przeczytanych'}</button>
            <Vote authorName={author} />
            <button onClick={onRemove}>Usuń</button>
        </li>
    ) : null;
}