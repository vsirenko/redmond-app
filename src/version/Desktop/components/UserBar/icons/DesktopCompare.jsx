import React from "react";
import s from "../UserBar.module.scss"
import sprite from '../../../../../assets/icons/icons-sprite.svg';
import{useSelector} from 'react-redux'

export default function DesktopCompare() {
    const lang = useSelector(state => state.language.default)
    return(
        <div className={s.element}>
            <span className={s.count}>0</span>
            <svg className={s.icon}>
                <use href={sprite + '#i-compare'}/>
            </svg>
            <span className={s.title}>{lang === 'ru' ? 'Сравнение' : 'Порівняння'}</span>
        </div>
    )
}