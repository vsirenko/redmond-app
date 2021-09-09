import React, {useState} from "react";
import s from "../UserBar.module.scss"
import sprite from "../../../../../assets/icons/icons-sprite.svg";
import Basket from "../../../components/PopUps/Basket";
import useClickOutside from "../../../../../utils/MissClick";
import { useSelector,useDispatch} from 'react-redux';
import { setPopupBasket } from "../../../../../actions/PopUp";

export default function MobileBasket() {
    const popupState = useSelector(state => state.PopUp.basket)
    const items = useSelector(state => state.Basket.items)
    const dispatch = useDispatch()

    const setPopUp = () => {
        dispatch(setPopupBasket(!popupState))
    }

    return(

        <div className={`basket--popup ${s.element}`} onClick={setPopUp}>
        {items.length > 0 && <span className={s.count}>{items.length}</span> }
            <svg className={s.icon}>
                <use href={sprite + '#i-basket'}/>
            </svg>
            <span className={s.title}>Корзина</span>
            
        </div>
    )
}