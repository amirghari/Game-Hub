import { useEffect, useState } from "react"
import clientApi from "../services/client-api"
import { CanceledError } from "axios"

interface Genre {
    id: number
    name: string
    slug: string
    background_image: string
}
interface results {
    count: number
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [errors, setErrors] = useState('')
    const [isLoading, setLoading] = useState(false)
    useEffect(() =>{
        setLoading(true)
        const controller = new AbortController()

        
        clientApi
        .get<results>('/genres', {signal: controller.signal})
        .then((res) =>{ setGenres(res.data.results);
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
    return {genres, errors, isLoading}
}

export default useGenres