import React from "react";
import s from "../UserBar.module.scss"
import sprite from "../../../../../assets/icons/icons-sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { setPopupWish } from "../../../../../actions/PopUp";
export default function MobileWish() {
    const popupState = useSelector(state => state.PopUp.wish)
    const dispatch = useDispatch()
    const handlerPopup = () => {
        dispatch(setPopupWish(!popupState))
    }
    console.log(popupState);
    return(
        <div className={`wish--popup ${s.element}`} onClick={handlerPopup}>
            <span className={s.count}>0</span>
            <svg className={s.icon}>
                <use href={sprite + '#i-wish'}/>
            </svg>
            <span className={s.title}>Желания</span>
        </div>
    )
}