import React from 'react';
import { ChakraProvider, Box, Text, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { theme } from './theme';
import RoutesPage from './components/index';
function App() {
  return (
    <ChakraProvider theme={theme}>
      {/*          <ColorModeSwitcher justifySelf="flex-end" />
       */}
      <RoutesPage />
    </ChakraProvider>
  );
}

export default App;
