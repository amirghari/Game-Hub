import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/game-center.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={5}>
      <Image src={logo} alt="logo" boxSize="50px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
