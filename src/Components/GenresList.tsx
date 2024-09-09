import { Image, HStack, List, ListItem, Text } from '@chakra-ui/react'
import useGenres from '../Hooks/useGenres'
import { Genre } from '../Hooks/useGenres'
import getCroppedImage from '../services/getCroppedImage'
const GenresList = () => {
  const { data } = useGenres()
  return (
    <>
      <List>
        {data?.map((genre: Genre) => (
          <ListItem key={genre.id} paddingX={5} paddingY={2}>
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                boxSize={'30px'}
                borderRadius={'8px'}
              />
              <Text fontSize={'large'}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenresList
