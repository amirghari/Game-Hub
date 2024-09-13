import { useEffect, useState } from "react";
import clientApi from "../services/client-api";
import { AxiosRequestConfig, CanceledError } from "axios";

interface Results<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps: any[] = []) => {
    const [data, setData] = useState<T[]>([]);
    const [errors, setErrors] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();

        clientApi
            .get<Results<T>>(endpoint, { signal: controller.signal, ...requestConfig }) // Merge request configs
            .then((res) => {
                setData(res.data.results); 
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return; 
                setErrors(err.message); 
                setLoading(false); 
            });

        return () => {
            controller.abort();
        };
    }, deps); 

   
    return { data, errors, isLoading };
};

export default useData;
