import { useState } from "react"
import { Book } from "./Book"

export const Books = ({ books }) => {
    const [isTooHeight, setIsTooHeight] = useState(false);
    const checkBooksHeight = (element) => {
        if (element) {
            if (element.getBoundingClientRect().height > 500) {
                setIsTooHeight(true);
            }
        }
    }

    return (
        <div>
            {isTooHeight && <p style={{ color: 'red' }}>Masz masę książek!</p>}
            {!isTooHeight && <p style={{ color: 'green' }}>Zbieraj dalej</p>}
            <ul ref={element => checkBooksHeight(element)}>
                {books.map((book) => (
                    <Book
                        key={book.title}
                        title={book.title}
                        author={book.author} 
                        publicationDate={book.publicationDate}
                    />
                ))}
            </ul>
        </div>
    )
}
