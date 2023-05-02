import React from 'react';
import s from './counter.module.css';

type ScreenType = {
    count: number
    maxValue: number
}

export const Screen = (props: ScreenType) : JSX.Element => {
    return (
        <div>
            <div className={s.counterScreen}>
                <span className={props.count === props.maxValue ? s.red : ''}>{props.count}</span>
            </div>
        </div>
    )
}
