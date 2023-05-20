import React, { useEffect, useState } from "react";
import s from './counter.module.css';
import { Buttons } from "./Buttons";
import { Screen } from "./Screen";

type PropsType = {
  incrementHandler: () => void
  resetHandler: () => void
  decrementHandler: () => void
  maxValue: number
  minValue: number
  count: number
}

export const Counter: React.FC<PropsType> = (props) => {
  return (
    <div className={s.appBody}>
      <div className={s.mainPannel}>
        <Screen
          count={props.count}
          maxValue={props.maxValue}
        />
        <Buttons
          incrementHandler={props.incrementHandler}
          resetHandler={props.resetHandler}
          decrementHandler={props.decrementHandler}
          count={props.count}
          maxValue={props.maxValue}
          minValue={props.minValue}
        />

      </div>



    </div>

  )
};

export default Counter;
