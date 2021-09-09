import React, {useState} from 'react'
import sprite from '../../../../../assets/icons/icons-sprite.svg'
import s from './Gamburger.module.scss'
import { useSelector,useDispatch} from 'react-redux';
import { setPopupCatalog } from '../../../../../actions/PopUp';


function Gamburger() {
    const popupState = useSelector(state => state.PopUp.catalog)
    const dispatch = useDispatch()
    const setPopUp = () => {
        dispatch(setPopupCatalog(!popupState))
    }
    return (

        <div className={`header--popup ${s.catalog}`} onClick={setPopUp}>
            <svg className={s.icon}>
                    {popupState ? <use href={sprite + '#i-close'}/> :  <use href={sprite + '#i-hamburger'}/> }
            </svg>
            
        </div>
    )
}

export default Gamburger
