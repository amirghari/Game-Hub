import { SimpleGrid } from '@chakra-ui/react'
import useGame from '../Hooks/useGame.ts'
import GameCard from './GameCard.tsx'
import CardSkeleton from './CardSkeleton.tsx'

const GameGrid = () => {
  const { games, errors, isLoading } = useGame()
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {errors && <li>{errors}</li>}
        {isLoading && skeleton.map((i) => <CardSkeleton key={i} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
