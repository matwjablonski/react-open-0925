import { useEffect, useState } from "react";

const API_URL = 'https://jsonplaceholder.typicode.com/';

export const useFetchData = (path, isFile = false) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // statuses = 'idle' | 'loading' | 'error' | 'success'
    // const [status, setStatus] = useState('idle');

    const url = isFile ? `/${path}` : `${import.meta.env.VITE_API_URL}${path}`;

    const fetchData = async () => {
        setIsLoading(true);
        // setStatus('loading');
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setData(result);
            setError(null);
        }
        catch (error) {
            setError(error.message)
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {
        data,
        error,
        isLoading,
    };
}