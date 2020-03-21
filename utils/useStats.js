import { useState, useEffect } from 'react';

export default function useStats(url) {
    const [stats, setStats] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            // Set Loading to true
            setLoading(true);
            setError();
            
            // Fetch data
            const data = await fetch(url)
                .then(res => res.json())
                .catch(err => {
                    setError(err)
                });
            
            // Set data
            setStats(data);

            // Set Loading to false once you get the data
            setLoading(false);
        }

        // Call fetch data function
        fetchData();
    }, [url]); // ComponentDidUpdate as it is dependent on url change

    return {
        stats,
        loading,
        error,
    };
}