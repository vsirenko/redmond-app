import React from "react";
import s from "../UserBar.module.scss"
import sprite from '../../../../../assets/icons/icons-sprite.svg';
import{useSelector} from 'react-redux'


export default function DesktopProfile() {
    const lang = useSelector(state => state.language.default)
    return(
        <div className={s.element}>
            <svg className={s.icon}>
                <use href={sprite + '#i-profile'}/>
            </svg>
            <span className={s.title}>{lang === 'ru' ? 'Профиль' : 'Профіль'}</span>
        </div>
    )
}