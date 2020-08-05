import React from 'react';
import './App.css';
import { AppHeader } from './header.js';
import { ImageList } from './imageList.js';
import { ImageFilter } from './imageFilter.js';
import { HornFilter } from './hornFilter.js';
import { FoodFilter } from './foodFilter.js';
import { ColorFilter } from './colorFilter.js';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <ImageList />
      <ImageFilter />
      <HornFilter />
      <FoodFilter />
      <ColorFilter />
    </div>
  );
}

export default App;
