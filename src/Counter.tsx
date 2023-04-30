import React, { useState } from "react";
import s from './counter.module.css';

export const Counter = (): JSX.Element => {
  let [count, setCount] = useState(0);
  const incrementHandler = () => setCount(++count)
  const resetHandler = () => setCount(0)
  const decrementHandler = () => setCount(--count)
  const maxValue = 5;

  return (
    <div className={s.appBody}>
      <div className={s.mainPannel}>
        <div className={s.counterScreen}>
          <span className={count === maxValue ? s.red : ''}>{count}</span>
        </div>
        <button disabled={count === maxValue} className={s.inc} onClick={incrementHandler}>+</button>
        <button disabled={count === 0} className={s.reset} onClick={resetHandler}>reset</button>
        <button disabled={count === 0} className={s.dec} onClick={decrementHandler}>-</button>

      </div>



    </div>

  )
};

export default Counter;
