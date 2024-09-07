import { Card, Image, Heading, CardBody, HStack } from '@chakra-ui/react'
import { Game } from '../Hooks/useGame'
import IconsComponent from './IconsComponent'
import CriticScore from './CriticScore'
import getCroppedImage from '../services/getCroppedImage'

const GameCard = ({ game }: { game: Game }) => {
  return (
    <>
      <Card>
        <Image
          src={getCroppedImage(game.background_image)}
          alt={game.name}
          overflow={'hidden'}
          borderRadius={10}
        />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <IconsComponent
              platform={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  )
}

export default GameCard
