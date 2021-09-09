import React from "react";
import s from "../UserBar.module.scss"
import sprite from "../../../../../assets/icons/icons-sprite.svg";
export default function MobileCompare() {
    return(
        <div className={s.element}>
            <span className={s.count}>0</span>
            <svg className={s.icon}>
                <use href={sprite + '#i-compare'}/>
            </svg>
            <span className={s.title}>Сравнение</span>
        </div>
    )
}