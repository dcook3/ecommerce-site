import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';

const usePost = () => {
    const [response, setResponse] = useState(Axios.AxiosResponse);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const postData = async (data) => {
        await axios.post(`http://localhost:3000/posts`, data)
        .then((res) => {
            setIsLoading(true);
            setResponse(res);
        })
        .catch((error) => {
            setError(error)
        })
        .finally(() => {
            setIsLoading(false);
        });
    }
    return {response, isLoading, error, postData};

}

export default usePost;