import React from "react";
import s from "../UserBar.module.scss"
import sprite from "../../../../../assets/icons/icons-sprite.svg";
import { useSelector,useDispatch} from 'react-redux';
import { setPopupLogin } from "../../../../../actions/PopUp";

export default function MobileProfile() {
    const popupState = useSelector(state => state.PopUp.login)
    const dispatch = useDispatch()
    const setPopUp = () => {
        dispatch(setPopupLogin(!popupState))
    }

    return(
        <div className={`login--popup ${s.element}`} onClick={setPopUp} >
            <svg className={s.icon}>
                <use href={sprite + '#i-profile'}/>
            </svg>
            <span className={s.title}>Профиль</span>
        </div>
    )
}