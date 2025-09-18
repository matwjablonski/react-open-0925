import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Book } from "./Book"

export const Books = ({ books }) => {
    const [bookList, setBookList] = useState(books);
    const [isTooHeight, setIsTooHeight] = useState(false);
    const listRef = useRef();

    const handleRemoveBook = (id) => {
        const filterBooks = (prev) => prev.filter(({ id: bookId }) => bookId !== id)
        setBookList(filterBooks);
    }

    const checkBooksHeight = (element) => {
        if (element) {
            setIsTooHeight(element.getBoundingClientRect().height > 500);
        }
    }

    useLayoutEffect(() => {
        listRef.current && checkBooksHeight(listRef.current);
    }, [bookList]);

    useEffect(() => {
        document.title = `Twój zbiór książek liczy ${bookList.length} książek`;
    }, [bookList.length]);


    return (
        <div>
            {isTooHeight && <p style={{ color: 'red' }}>Masz masę książek!</p>}
            {!isTooHeight && <p style={{ color: 'green' }}>Zbieraj dalej</p>}
            <ul ref={listRef}>
                {bookList.map((book) => (
                    <Book
                        key={book.title}
                        title={book.title}
                        author={book.author} 
                        publicationDate={book.publicationDate}
                        onRemove={() => handleRemoveBook(book.id)}
                    />
                ))}
            </ul>
        </div>
    )
}
