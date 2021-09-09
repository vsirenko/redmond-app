import React from 'react'
import s from './Buttons.module.scss'


export default function Button(props) {
    return(
        <button
            onClick={props.onClick}
            className={` ${s.btn} ${s[props.style]} ${props.class}`}
        >
            {props.text}
        </button>
    )
}


