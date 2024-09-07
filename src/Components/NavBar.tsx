import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Logo/icons8-apple-arcade-96.png'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={5}>
      <Image src={logo} alt="logo" boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
