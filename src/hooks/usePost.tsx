import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

const usePost = () => {
    const [response, setResponse] = useState<AxiosResponse>();
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const postData = async (data:any) => {
        await axios.post(`http://localhost:3000/posts`, data)
        .then((res) => {
            setIsLoading(true);
            setResponse(res);
        })
        .catch((error:any) => {
            setError(error.response.message)
        })
        .finally(() => {
            setIsLoading(false);
        });
    }
    return {response, isLoading, error, postData};

}

export default usePost;