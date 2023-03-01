import React from 'react';
import { ChakraProvider, Box, Text, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { theme } from './theme';
import RoutesPage from './components/routing';
import BlogsComponent from './components/frontOffice/Blogs/blog';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/*          <ColorModeSwitcher justifySelf="flex-end" />
       */}
      <BrowserRouter>
        <RoutesPage />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
