import React from 'react';
import './App.css';
import Dinner from './dinner.js';


function App() {
  return (
      <div className="App">
        <Dinner dishName="chicken karahi" sweetDish="kheer" /> 
          <hr/>
        <Dinner dishName="nihari" sweetDish="jaleebi" /> 
          <hr/>
        <Dinner dishName="chicken baryani" sweetDish="gajer ka halwa" /> 
          <hr/>
        {/* <Dinner></Dinner> */}
      </div>

  );
}

export default App;
