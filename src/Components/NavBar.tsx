import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/game-center.png'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={5}>
      <Image src={logo} alt="logo" boxSize="50px" />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
