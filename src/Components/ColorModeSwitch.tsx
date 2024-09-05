import { HStack, Switch, useColorMode, Text } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack>
      <Switch colorScheme="teal" onChange={toggleColorMode} />
      <Text>{colorMode === 'dark' ? 'Dark' : 'Light'}</Text>
    </HStack>
  )
}

export default ColorModeSwitch
