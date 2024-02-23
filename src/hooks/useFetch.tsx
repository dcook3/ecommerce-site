import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../types/Product';

const useFetch = () => {
    const [data, setData] = useState<Array<Product>>([]);
    const [loading, setLoad] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        
        const getData = async () => {
            try{
                const response = await axios.get(`http://localhost:3000/products`);
                setData(response.data);
            }
            catch (error: any) {
                setError(error.message);
            } finally {
                setLoad(false)
            }
        }
        getData();
    }, [])
    
    return { data, loading, error}
}

export default useFetch;