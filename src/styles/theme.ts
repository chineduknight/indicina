import { extendTheme } from "@chakra-ui/react"
import { ButtonStyles as Button } from './components/buttonStyles'

// More info on theme customization
// https://chakra-ui.com/docs/styled-system/theming/customize-theme#theme-extension-withdefaultcolorscheme
const theme = extendTheme({
  fonts: {
    heading: "DM Sans",
    body: "DM Sans",
  },
  components: {
    Button,
  },
})

export default theme;