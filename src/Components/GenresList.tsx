import useGenres from '../Hooks/useGenres'
import { Genre } from '../Hooks/useGenres'
const GenresList = () => {
  const { data } = useGenres()
  return (
    <>
      <ul>
        {data?.map((genre: Genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  )
}

export default GenresList
