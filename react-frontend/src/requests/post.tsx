const createPostRequest = (param:string, jsonBody: string, uml: string, setIsLoading: (value: boolean) => void, setList: (data: any) => void, setError: (msg: string) => void) => {
    const fetchPost = async () => {
        setIsLoading(true);
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ [jsonBody]: param })
        };

        try {
        const response = await fetch('http://localhost:5001/api' + uml, settings);
        const data = await response.json();
        setList(data);
        } catch (error) {
        setError("something went wrong");
        console.error(error);
        } finally {
        setIsLoading(false);
        }
    };

    return { fetchPost }
}

export default createPostRequest;