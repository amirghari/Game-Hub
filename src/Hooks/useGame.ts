import { useEffect, useState } from "react"
import clientApi from "../services/client-api"
import { CanceledError } from "axios"

 export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Game {
    id: number
    slug: string
    name: string
    background_image: string
    parent_platforms: { platform : Platform }[] 
  }
  interface results {
    results: Game[]
  }

const useGame = () => {

    const [games, setGames] = useState<Game[]>([])
    const [errors, setErrors] = useState('')
    useEffect(() => {
      const controller = new AbortController()
      clientApi
        .get<results>('/games', { signal: controller.signal })
        .then((res) => setGames(res.data.results))
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setErrors(err.message)});
        return () => {
          controller.abort()
        }
        
    }, [])

    return { games, errors };
}
export default useGame;