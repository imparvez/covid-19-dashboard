import { useState, useEffect } from 'react';

export default function useStats(url) {
    const [stats, setStats] = useState();

    useEffect(() => {
        async function fetchData() {
            // Fetch data
            const data = await fetch(url).then(res => res.json());
            // Set data
            setStats(data);
        }

        // Call fetch data function
        fetchData();
    }, [url]); // ComponentDidUpdate as it is dependent on url change

    return stats;
}