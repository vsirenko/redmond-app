import React from "react";
import s from "../UserBar.module.scss"
import sprite from '../../../../../assets/icons/icons-sprite.svg';

export default function DesktopCatalog() {
    return(
        <div className={s.element}>
            <svg className={s.icon}>
                <use href={sprite + '#i-hamburger'}/>
            </svg>
            <span className={s.title}>Каталог</span>
        </div>
    )
}