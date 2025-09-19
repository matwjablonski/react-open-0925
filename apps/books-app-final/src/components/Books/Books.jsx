import { useEffect, useLayoutEffect, useRef, useState, useTransition } from "react"
import { Book } from "../Book/Book"
import styles from './Books.module.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../slices/Books.slice";

export const Books = () => {
    // const books = useTestData(   );
    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books);
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    useEffect(() => {
        setBookList(books);
    }, [books]);

    const [isTooHeight, setIsTooHeight] = useState(false);
    const listRef = useRef();
    const [isPending, startTransition] = useTransition();

    const handleRemoveBook = (id) => { 
        startTransition(() => {
            const filterBooks = (prev) => prev.filter(({ id: bookId }) => bookId !== id)
            setBookList(filterBooks);
        });
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
            <h2>Lista książek</h2>
            {isPending && <p>Usuwanie książki...</p>}
            {isTooHeight && <p style={{ color: 'red' }}>Masz masę książek!</p>}
            {!isTooHeight && <p style={{ color: 'green' }}>Zbieraj dalej</p>}
            <ul ref={listRef} className={styles.list}>
                {bookList.map((book) => (
                    <Book
                        key={book.title}
                        id={book.id}
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
