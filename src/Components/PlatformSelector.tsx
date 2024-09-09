import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../Hooks/usePlatforms'
import { Platform } from '../Hooks/usePlatforms'
const PlatformSelector = () => {
  const { data, errors } = usePlatforms()
  if (errors) return null
  return (
    <Menu>
      <MenuButton marginBottom={2} as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform: Platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
