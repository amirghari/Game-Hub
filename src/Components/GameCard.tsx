import { Card, Image, Heading, CardBody } from '@chakra-ui/react'
import { Game } from '../Hooks/useGame'
interface Props {
  game: Game
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image
          src={game.background_image}
          alt={game.name}
          overflow={'hidden'}
          borderRadius={10}
        />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  )
}

export default GameCard
