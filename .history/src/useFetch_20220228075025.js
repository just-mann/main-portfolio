import {useState, useEffect} from 'react';

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok) {
                        throw Error('Could not find the data from the resource');
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                    console.log(data)
                })
                .catch(err => {
                    setIsPending(true);
                    setError(err.message);
                })
        }, 1000);
    }, [url]);

    return {
        data,
        isPending,
        error
    }
}


export default useFetch;