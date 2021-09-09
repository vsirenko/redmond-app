import React from 'react'
import style from "../ItemTile.module.scss";
import sprite from "../../../../../assets/icons/icons-sprite.svg";



export default function PromoIcons(props) {

    const isPromoIcon = props.promoIcon;

    if(isPromoIcon){
        return (
            <svg className={style.pIcon}>
                <use href={sprite + `#i-promo-${props.promoIcon}`}/>
            </svg>
        )
    } else {
        return ''
    }

}

