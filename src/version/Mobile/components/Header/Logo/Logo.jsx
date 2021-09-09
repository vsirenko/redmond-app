import React from "react";
import s from "./Logo.module.scss"
import sprite from '../../../../../assets/icons/icons-sprite.svg';
import {Link} from "react-router-dom";

export default function Logo() {
    return (
        <div className={s.logo}>
            <Link to="/" className={s.link}>
                <svg className={s.icon}>
                    <use href={sprite + '#i-logo'}/>
                </svg>
            </Link>
        </div>
    )
}