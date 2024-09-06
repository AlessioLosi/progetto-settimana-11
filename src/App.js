import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ColorSchemesExample from './components/NavBar';
import MainContent from './components/MainSection';
import SongList from './components/SongsList';



function App() {


  return (
    <div className="App">
      <>
      <ColorSchemesExample/>
      <MainContent/>
      <SongList/>
     </>
    </div>
  );
}

export default App;
