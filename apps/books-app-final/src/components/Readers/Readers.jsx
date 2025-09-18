import { use, useState } from "react";
// import { useFetchData } from "../hooks/useFetchData";

const fetchReaders = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        return data;
        
    } catch (error) {
        throw new Error('Failed to fetch readers: ' + error.message);
    }
}

const fetchReadersPromise = fetchReaders();

export const Readers = () => {
    const [isVisible, setIsVisible] = useState(false);
    const readers = use(fetchReadersPromise);
    // const { data: readers } = useFetchData('users');
    // const { data: localReaders } = useFetchData('readers.json', true);

    return (
        <div>
            <h2>Lista czytelników</h2>
            <button onClick={() => setIsVisible((prev) => !prev)}>{isVisible ? 'Ukryj' : 'Pokaż'} czytelników</button>
            {isVisible && (
                <ul>
                    {readers.map((reader) => (
                        <li key={reader.id}>{reader.name} [{reader.username}] ({reader.email} / {reader.website})</li>
                    ))}
                </ul>
            )}
        </div>
    )
}