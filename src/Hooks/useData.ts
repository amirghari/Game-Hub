import { useEffect, useState } from "react";
import clientApi from "../services/client-api";
import { AxiosRequestConfig, CanceledError } from "axios";

// Define the interface for the results returned from the API
interface Results<T> {
    count: number;
    results: T[];
}

// The useData hook fetches data from an endpoint with optional request configurations
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
                setData(res.data.results); // Set the fetched data
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return; // Skip setting error on cancel
                setErrors(err.message); // Set the error message
                setLoading(false); // Stop loading state
            });

        // Cleanup function to abort the API call if the component unmounts
        return () => {
            controller.abort();
        };
    }, deps); // Use the dependencies array

    // Return the data, any errors, and the loading state
    return { data, errors, isLoading };
};

export default useData;
