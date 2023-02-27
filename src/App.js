import React from 'react';
import { ChakraProvider, Box, Text, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { theme } from './theme';
import RoutesPage from './components/index';
import BlogsComponent from './components/Blogs/Blogs';
function App() {
  return (
    <ChakraProvider theme={theme}>
      {/*          <ColorModeSwitcher justifySelf="flex-end" />
       */}
      <RoutesPage />
      <BlogsComponent />
    </ChakraProvider>
  );
}

export default App;
