import useGenres from '../Hooks/useGenres'
const GenresList = () => {
  const { genres } = useGenres()
  return (
    <>
      <ul>
        {genres?.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  )
}

export default GenresList
