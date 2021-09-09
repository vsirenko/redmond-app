import React from "react";
import s from "./Search.module.scss"
import sprite from '../../../../../assets/icons/icons-sprite.svg';

export default function Search() {
    return (
        <div className={s.search}>
            <svg className={s.icon}>
                <use href={sprite + '#i-search'}/>
            </svg>
        </div>
    )
}