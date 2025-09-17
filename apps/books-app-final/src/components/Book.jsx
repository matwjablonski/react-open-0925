export const Book = ({ title, author, publicationDate }) => {
    return (
        <li>
            {title} - {author} ({publicationDate})
        </li>
    )
}