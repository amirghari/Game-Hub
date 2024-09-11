import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './Components/NavBar'
import GameGrid from './Components/GameGrid'
import GenresList from './Components/GenresList'
import { useState } from 'react'
import { Genre } from './Hooks/useGenres'
import PlatformSelector from './Components/PlatformSelector'
import { Platform } from './Hooks/usePlatforms'
import SortSelector from './Components/SortSelector'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  )
  const [sortOrder, setSortOrder] = useState<string>('')
  const [search, setSearch] = useState<string>('')

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
        <NavBar onSearch={(searchText) => setSearch(searchText)} />
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
        <HStack padding={2} spacing={5} marginBottom={5}>
          <PlatformSelector
            setSelectedPlatform={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          />
          <SortSelector
            selectSortOrder={(value: string) => setSortOrder(value)}
            sortOrder={sortOrder}
          />
        </HStack>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          sortOrder={sortOrder}
          search={search}
        />
      </GridItem>
    </Grid>
  )
}

export default App
