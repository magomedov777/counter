import React, { useState } from "react";
import s from './counter.module.css';
import { Buttons } from "./Buttons";
import { Screen } from "./Screen";

export const Counter: React.FC = ()  => {
  let [count, setCount] = useState(0);

  const incrementHandler = () => setCount(++count)

  const resetHandler = () => setCount(0)
  
  const decrementHandler = () => setCount(--count)
  
  const maxValue = 5;
  
  const minValue = 0;

  return (
    <div className={s.appBody}>
      <div className={s.mainPannel}>
        <Screen
          count={count}
          maxValue={maxValue}
        />
        <Buttons
          incrementHandler={incrementHandler}
          resetHandler={resetHandler}
          decrementHandler={decrementHandler}
          count={count}
          maxValue={maxValue}
          minValue={minValue}
        />

      </div>



    </div>

  )
};

export default Counter;
