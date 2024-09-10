import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './Components/NavBar'
import GameGrid from './Components/GameGrid'
import GenresList from './Components/GenresList'
import { useState } from 'react'
import { Genre } from './Hooks/useGenres'
import PlatformSelector from './Components/PlatformSelector'
import { Platform } from './Hooks/usePlatforms'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  )

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
          <GenresList
            setSelectedGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <PlatformSelector
          setSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  )
}

export default App
