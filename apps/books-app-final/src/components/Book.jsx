import { useState } from "react";
import { Vote } from "./Vote";

export const Book = ({ title, author, publicationDate, ...rest }) => {
    const [isRead, setIsRead] = useState(false);

    const toggleReadStatus = () => {
        setIsRead((prev) => !prev);
    }

    // if (rest.hide) {
    //     return null;
    // }

    return !rest.hide ? (
        <li {...rest}>
            {title} [{isRead ? '✔️' : '❌'}] - {author} ({publicationDate})
            <button onClick={toggleReadStatus}>{isRead ? 'Usuń z przeczytanych' : 'Dodaj do przeczytanych'}</button>
            <Vote authorName={author} />
        </li>
    ) : null;
}