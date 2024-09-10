import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/game-center.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding={5}>
      <Image src={logo} alt="logo" boxSize="50px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
