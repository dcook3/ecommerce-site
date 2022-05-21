import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoad] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        
        const getData = async () => {
            try{
                const response = await axios.get(`http://localhost:3000/products`);
                setData(response.data);
            }
            catch (error) {
                setError(error);
            } finally {
                setLoad(false)
            }
        }
        getData();
    }, [])
    
    return { data, loading, error}
}

export default useFetch;