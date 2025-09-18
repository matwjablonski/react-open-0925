import { useEffect, useState } from "react";

const API_URL = 'https://jsonplaceholder.typicode.com/';

export const useFetchData = (endpoint) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}${endpoint}`);
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