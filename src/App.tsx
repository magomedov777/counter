import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let plusNum = () => {setNum(++num)}
  let clearValue = () => {setNum(0)}
  let minusNum = () => {setNum(--num)}
  let[num, setNum] = useState(0)
  return (
    <div className="App">
     <h1>{num}</h1>
     <button onClick={plusNum}>PLUS</button>
     <button onClick={clearValue}>CLEAR</button>
     <button onClick={minusNum}>MINUS</button>
    </div>
  );
}

export default App;
