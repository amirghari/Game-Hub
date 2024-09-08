import { useEffect, useState } from "react"
import clientApi from "../services/client-api"
import { CanceledError } from "axios"

interface results<T> {
    count: number
    results: T[]
}
const useData = <T>(endpoint : string) => {
const [data, setData] = useState<T[]>([])
    const [errors, setErrors] = useState('')
    const [isLoading, setLoading] = useState(false)
    useEffect(() =>{
        setLoading(true)
        const controller = new AbortController()

        
        clientApi
        .get<results<T>>(endpoint, {signal: controller.signal})
        .then((res) =>{ setData(res.data.results);
        setLoading(false)
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setErrors(err.message)
            setLoading(false)
            
        })
        return () => {
            controller.abort()
          }
    }, [])
    return {data, errors, isLoading}
}
export default useData