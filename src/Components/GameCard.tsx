import { Card, Image, Heading, CardBody } from '@chakra-ui/react'
import { Game } from '../Hooks/useGame'
import IconsComponent from './IconsComponent'

const GameCard = ({ game }: { game: Game }) => {
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
          <IconsComponent
            platform={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
      </Card>
    </>
  )
}

export default GameCard
