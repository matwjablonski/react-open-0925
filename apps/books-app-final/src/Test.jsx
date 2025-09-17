export const Test = ({ filteredData }) => {

    return <div>
        {filteredData.map((book) => (
            <div key={book.title}>
                <h2>{book.title}</h2>
            </div>
        ))}
    </div>
};
