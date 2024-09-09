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
}

const GenresList = ({ setSelectedGenre }: props) => {
  const { data, isLoading, errors } = useGenres()
  return (
    <>
      {errors && null}
      <List>
        {isLoading && <Spinner marginX={7} />}
        {data?.map((genre: Genre) => (
          <ListItem key={genre.id} paddingX={5} paddingY={2}>
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                boxSize={'30px'}
                borderRadius={'8px'}
              />
              <Button
                fontSize={'large'}
                variant={'link'}
                onClick={() => setSelectedGenre(genre)}
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
