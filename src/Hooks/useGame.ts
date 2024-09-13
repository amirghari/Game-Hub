import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    slug: string;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    genres: string; // Ensure this matches your API data type
}

// The useGame hook fetches games data with filters and sorting
const useGame = (
    selectedGenre: Genre | null,
    selectedPlatform: Platform | null,
    sortOrder: string,
    search: string
) => {
    // Prepare request parameters based on the provided filters
    const requestParams = {
        params: {
            genres: selectedGenre?.id,
            platforms: selectedPlatform?.id,
            ordering: sortOrder,
            search: search,
        },
    };

    // Use the useData hook to fetch game data
    return useData<Game>('/games', requestParams, [selectedGenre?.id, selectedPlatform?.id, sortOrder, search]);
};

export default useGame;
