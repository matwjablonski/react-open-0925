import { Book } from "./Book"

export const Books = ({ books }) => {
    return (
        <ul>
            {books.map((book) => (
                <Book
                    key={book.title}
                    title={book.title}
                    author={book.author} 
                    publicationDate={book.publicationDate}
                />
            ))}
        </ul>
    )
}
