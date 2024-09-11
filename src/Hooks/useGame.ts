import useData from './useData'
import { Genre } from './useGenres'

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
    metacritic : number
    genres:string
  }

const useGame = (selectedGenre: Genre | null, selectedPlatform: Platform | null, sortOrder: string, search: string) => useData<Game>('/games', {params: { genres: selectedGenre?.id ,platforms : selectedPlatform?.id , ordering: sortOrder, search: search}}, [selectedGenre?.id, selectedPlatform?.id, sortOrder, search]) 
export default useGame;