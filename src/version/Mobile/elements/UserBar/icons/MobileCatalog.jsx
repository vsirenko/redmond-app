import React from "react";
import s from "../UserBar.module.scss"
import sprite from "../../../../../assets/icons/icons-sprite.svg";
import { useSelector,useDispatch} from 'react-redux';
import { setPopupCatalog } from "../../../../../actions/PopUp";


export default function MobileCatalog() {
    const popupState = useSelector(state => state.PopUp.catalog)
    const dispatch = useDispatch()

    const setPopUp = () => {
        dispatch(setPopupCatalog(!popupState))
    }

    return(
        <div className={`header--popup ${s.element}`} onClick={setPopUp}>
            <svg className={s.icon}>
                <use href={sprite + '#i-hamburger'}/>
            </svg>
            <span className={s.title}>Каталог</span>
        </div>
    )
}