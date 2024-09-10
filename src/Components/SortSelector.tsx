import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
  selectSortOrder: (sortOrder: string) => void
  sortOrder: string
}

const SortSelector = ({ selectSortOrder, sortOrder }: Props) => {
  const sortSelector = [
    {
      name: 'Relevance',
      value: '',
    },
    {
      name: 'Date added',
      value: '-date',
    },
    {
      name: 'Name',
      value: 'name',
    },
    {
      name: 'Date added',
      value: '-added',
    },
    {
      name: 'Release date',
      value: '-released',
    },
    {
      name: 'Popularity',
      value: '-metacritic',
    },
    {
      name: 'Average Rating',
      value: '-rating',
    },
  ]
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {sortOrder !== ''
          ? sortSelector.find((item) => item.value === sortOrder)?.name
          : 'Ordering: SortOrder'}
      </MenuButton>
      <MenuList>
        {sortSelector.map((item) => (
          <MenuItem
            value={item.value}
            key={item.value}
            onClick={() => selectSortOrder(item.value)}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
