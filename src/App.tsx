import Pages from 'pages';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'styles/theme';
import "./App.css";
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Pages data-test="component-app" />
      <Toaster />
    </ChakraProvider>
  )
}

export default App