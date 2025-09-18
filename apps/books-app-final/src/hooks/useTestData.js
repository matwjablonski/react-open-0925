import { useState } from 'react';
import { books } from '../data'

export const useTestData = () => {
    const [data] = useState(books);

    return data;
}