import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import SwipeButtons from './Components/SwipeButtons/SwipeButtons';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Cards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
