import Pages from 'pages';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'styles/theme';
import "./App.css";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Pages />
    </ChakraProvider>
  )
}

export default App