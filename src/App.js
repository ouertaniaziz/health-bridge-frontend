import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import RoutesPage from './components/routing';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../src/config/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <>
      {/*          <ColorModeSwitcher justifySelf="flex-end" />
       */}

      {/* ); */}

      <BrowserRouter>
        <Provider store={store}>
          <RoutesPage />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
