import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark'
}

// 3. extend the theme
const theme = extendTheme({ config, colors: {gray: {
  50: 'f9f9f9',
  100: 'ededed',
  200: 'd3d3d3',
  300: 'b3b3b3',
  400: 'a0a0a0',
  500: '898989',
  600: '666666',
  700: '4d4d4d',
  800: '333333',
  900: '1a1a1a',
  


}} })

export default theme