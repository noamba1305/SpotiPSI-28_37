import { useEffect } from 'react';

const useGetRequest = (uml: string, setIsLoading: (value: boolean) => void, setList: (data: any) => void, setError: (msg: string) => void) => {
    const fetchGet = async () => {
        setIsLoading(true);
        try {
        const response = await fetch('http://localhost:5001/api' + uml);
        const data = await response.json();
        setList(data);
        } catch (error) {
        setError("something went wrong");
        console.error(error);
        } finally {
        setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchGet();
    }, []);

    return { fetchGet }
}

export default useGetRequest;