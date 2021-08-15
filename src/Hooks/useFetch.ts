const useFetch = () => {
    return <T>(input: RequestInfo, init?: RequestInit | undefined) =>
        fetch(input, init)
            .then(res => {
                if (res.ok) {
                    return res.text();
                }
                throw res;
            })
            .then(data => {
                const dataObject = JSON.parse(data);
                return dataObject as T;
            })
            .catch(async error => {
                throw error;
            });
};

export default useFetch;
