import React, {useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";

const App = () => {
  let [value, setValue] = useState<number>(0);

  useEffect(() => {
    let valueAsString = localStorage.getItem("counterValue")
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      setValue(newValue)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(value))
  }, [value])

   const incrementHandler = () => {
    setValue(++value)
    // setToLocalStorageHandler()
  }

  const resetHandler = () => setValue(0)

  const decrementHandler = () => setValue(--value)

  const maxValue = 5;

  const minValue = 0;

  // const setToLocalStorageHandler = () => {
  //   localStorage.setItem('keyValue', JSON.stringify(count))
  // }
  // const getFromStorageHandler = () => {
  //   let countAsString = localStorage.getItem('keyValue')
  //   if (countAsString) {
  //     let newCount = JSON.parse(countAsString)
  //     setCount(newCount)
  //   }
  // }

  return (
    <div className="App">
      <Counter
        incrementHandler={incrementHandler}
        resetHandler={resetHandler}
        decrementHandler={decrementHandler}
        maxValue={maxValue}
        minValue={minValue}
        value={value}
      />
    </div>
  );
}


export default App;
