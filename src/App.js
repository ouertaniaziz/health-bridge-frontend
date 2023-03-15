import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import RoutesPage from './components/routing';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from "react";
import { useState } from "react";
 
export const RecoveryContext = createContext();
function App() {
  
  
    
  return (
    <>
      {/*          <ColorModeSwitcher justifySelf="flex-end" />
       */}
       
  {/* ); */}

     
      <BrowserRouter>
        <RoutesPage />
     
      </BrowserRouter>
      
    </>
    
   
  );
}

export default App;
