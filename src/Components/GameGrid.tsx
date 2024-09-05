import { useEffect, useState } from 'react'
import clientApi from '../services/client-api'

interface Game {
  id: number
  slug: string
  name: string
}
interface results {
  results: Game[]
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([])
  const [errors, setErrors] = useState('')

  useEffect(() => {
    clientApi
      .get<results>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setErrors(err.message))
  })
  return (
    <ul>
      {errors && <li>{errors}</li>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  )
}

export default GameGrid
