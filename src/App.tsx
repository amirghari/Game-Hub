import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './Components/NavBar'
import GameGrid from './Components/GameGrid'
import GenresList from './Components/GenresList'
import { useState } from 'react'
import { Genre } from './Hooks/useGenres'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  return (
    <Grid
      templateAreas={{
        base: `"nav"
               "main"`,
        lg: `"nav nav"
             "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr',
      }}
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside">
          <GenresList setSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
