import { useParams } from "react-router";
import { useTestData } from "../hooks/useTestData";

export const BookPage = () => {
    const { id } = useParams();
    const book = useTestData(id);

    return (
        <div>
            <h2>Szczegóły książki o id {id}</h2>
            {book ? (
                <div>
                    <h3>{book.title}</h3>
                    <p>Autor: {book.author}</p>
                    <p>Data publikacji: {book.publicationDate}</p>
                </div>
            ) : (
                <p>Książka nie znaleziona</p>
            )}
        </div>
    )
}