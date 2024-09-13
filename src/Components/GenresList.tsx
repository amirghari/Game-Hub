import {
  Image,
  HStack,
  List,
  ListItem,
  Spinner,
  Button,
} from '@chakra-ui/react'
import useGenres from '../Hooks/useGenres'
import { Genre } from '../Hooks/useGenres'
import getCroppedImage from '../services/getCroppedImage'

interface props {
  setSelectedGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenresList = ({ setSelectedGenre, selectedGenre }: props) => {
  const { data, isLoading, errors } = useGenres()
  if (errors) return null
  return (
    <>
      <List>
        {isLoading && <Spinner marginX={7} />}
        {data?.map((genre: Genre) => (
          <ListItem key={genre.id} paddingX={5} paddingY={2}>
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                boxSize={'30px'}
                borderRadius={'8px'}
                objectFit="cover"
              />
              <Button
                fontSize={'large'}
                variant={'link'}
                onClick={() => setSelectedGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenresList
