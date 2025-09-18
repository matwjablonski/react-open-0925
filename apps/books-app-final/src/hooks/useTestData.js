import { useState } from 'react';
import { books } from '../data'

export const useTestData = (id) => {
    const [data] = useState(() => id ? books.find(book => book.id === parseInt(id, 10)) : books);

    return data;
}