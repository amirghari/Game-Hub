import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../Hooks/usePlatforms'
import { Platform } from '../Hooks/usePlatforms'

interface Props {
  setSelectedPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

const PlatformSelector = ({ setSelectedPlatform, selectedPlatform }: Props) => {
  const { data, errors } = usePlatforms()
  if (errors) return null
  return (
    <Menu>
      <MenuButton marginBottom={2} as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : 'Select Platform'}
      </MenuButton>
      <MenuList>
        {data.map((platform: Platform) => (
          <MenuItem
            onClick={() => setSelectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
