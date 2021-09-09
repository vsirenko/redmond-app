import React from "react";
import s from "../UserBar.module.scss"
import sprite from '../../../../../assets/icons/icons-sprite.svg';

export default function DesktopWish() {
    return (
        <div className={`${s.element} ${s.search}`}>

            <svg className={s.icon}>
                <use href={sprite + '#i-search'}/>
            </svg>
            <span className={s.title}>Поиск</span>
        </div>
    )
}