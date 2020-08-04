import React from 'react';
import './App.css';
import { AppHeader } from './header.js';
import { ImageList } from './imageList.js';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <ImageList />
    </div>
  );
}

export default App;
