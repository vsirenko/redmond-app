import React from 'react'
import s from './Buttons.module.scss'
import sprite from "../../../../assets/icons/icons-sprite.svg";


export default function Button(props) {
    return(
        <button
            type='submit'
            onClick={props.onClick}
            className={`${s.btn} ${s[props.style]} ${props.class}`}
        >
            {/* <svg className={s.iconL}>
                <use href={sprite + `#${props.iconL}`}/>
            </svg> */}

            {props.title}

            {/* <svg className={s.iconR}>
                <use href={sprite + `#${props.iconR}`}/>
            </svg> */}
        </button>
    )
}


