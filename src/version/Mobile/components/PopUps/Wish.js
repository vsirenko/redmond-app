import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPopupWish } from '../../../../actions/PopUp'
import useClickOutside from '../../../../utils/MissClick'
import NotFound from '../NotFound/NotFound'
import s from './Wish.module.scss'
import BasketTile from '../BasketTile/BasketTile'
import ItemTile from '../ItemTile/ItemTile'

function Wish() {
    const dispatch = useDispatch()
    const popupState = useSelector(state => state.PopUp.wish)
    const ref = useClickOutside(false, () => dispatch(setPopupWish(false)), 'wish--popup' )
    return (
        <div ref={ref} className={`${s.popup} ${popupState && s.active}`} >
            Оупс, спиок желаний пуст
            <NotFound />
            {/* <BasketTile /> */}
        </div>
    )
}

export default Wish
