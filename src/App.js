import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ColorSchemesExample from './components/NavBar';
import MainContent from './components/MainSection';



function App() {


  return (
    <div className="App">
      <>
      <ColorSchemesExample/>
      <MainContent/>
     </>
    </div>
  );
}

export default App;
