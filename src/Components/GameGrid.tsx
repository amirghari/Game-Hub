import { SimpleGrid } from '@chakra-ui/react'
import useGame from '../Hooks/useGame.ts'
import GameCard from './GameCard.tsx'

const GameGrid = () => {
  const { games, errors } = useGame()
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
      {errors && <li>{errors}</li>}
      {games.map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </SimpleGrid>
  )
}

export default GameGrid
