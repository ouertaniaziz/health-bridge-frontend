import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import RoutesPage from './components/routing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      {/*          <ColorModeSwitcher justifySelf="flex-end" />
       */}
      <BrowserRouter>
        <RoutesPage />
      </BrowserRouter>
    </>
  );
}

export default App;
