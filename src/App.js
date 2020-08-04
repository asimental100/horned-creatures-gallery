import React from 'react';
import './App.css';
import { AppHeader } from './header.js';
import { ImageList } from './imageList.js';
import { ImageFilter } from './imageFilter.js';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <ImageList />
      <ImageFilter />
    </div>
  );
}

export default App;
