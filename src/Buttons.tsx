import React from 'react';
import s from './counter.module.css';

type ButtonType = {
    incrementHandler: () => void
    resetHandler: () => void
    decrementHandler: () => void
    count: number
    maxValue: number
    minValue: number
}

export const Buttons = (props: ButtonType) : JSX.Element => {
    return (
        <div>
            <button disabled={props.count === props.maxValue} className={s.inc} onClick={props.incrementHandler}>+</button>
            <button disabled={props.count === props.minValue} className={s.reset} onClick={props.resetHandler}>reset</button>
            <button disabled={props.count === props.minValue} className={s.dec} onClick={props.decrementHandler}>-</button>
        </div>
    )
}