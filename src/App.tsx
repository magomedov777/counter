import React, {useState} from 'react';
import './App.css';

function App() {
  let plusNum = () => {setNum(++num)}
  let clearValue = () => {setNum(0)}
  let minusNum = () => {setNum(--num)}
  let[num, setNum] = useState(0)

  return (
    <div className="App">
     <h1>{num}</h1>
      <button className='plus' onClick={plusNum}>PLUS</button>
      <button className='clear' onClick={clearValue}>CLEAR</button>
      <button className='minus' onClick={minusNum}>MINUS</button>
    </div>
  );
}

export default App;
