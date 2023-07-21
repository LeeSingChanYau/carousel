import React from 'react';
import './App.css';
import Carousel from './Carousel';

const images = [['halaand'], ['mbappe'], ['neymar'], ['messi'], ['ronaldo']];

function App() {
  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
}

export default App;
