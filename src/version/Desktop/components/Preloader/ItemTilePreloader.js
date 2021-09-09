import React from 'react'
import sprite from '../../../../assets/icons/icons-sprite.svg'
import s from './ItemTilePreloader.module.scss'

function ItemTilePreloader() {
    const items = Array(10).fill(0)
    return (
        items.map((_, key)=>
        <svg key={key} className={s.icon}>
            <use href={sprite + '#i-product-item-preloader'}/>
        </svg>
        )
        
    )
}

export default ItemTilePreloader
