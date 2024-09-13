import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark'
}

// 3. extend the theme
const theme = extendTheme({ config, colors: {gray: {
  50: 'f9f9f9',
  100: 'ededed',




}} })

export default theme