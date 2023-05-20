import React, { FC, useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";

const App: React.FC = () => {

  useEffect(() => {
    let valueAsString = localStorage.getItem('countValue')
    if (valueAsString) {
      let newCount = JSON.parse(valueAsString)
      setCount(newCount)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('countValue', JSON.stringify(count))
  }, [count])

  const incrementHandler = () => {
    setCount(++count)
  } 

  const resetHandler = () => setCount(0)

  const decrementHandler = () => setCount(--count)

  const maxValue = 5;

  const minValue = 0;
  
  return (
    <div className="App">
      <Counter
        incrementHandler={incrementHandler}
        resetHandler={resetHandler}
        decrementHandler={decrementHandler}
        maxValue={maxValue}
        minValue={minValue}
        count={count}
      />
    </div>
  );
}


export default App;
