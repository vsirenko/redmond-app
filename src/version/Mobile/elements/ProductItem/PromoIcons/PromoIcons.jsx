import React from 'react'
import s from "../ProductItem.module.scss";
import sprite from "../../../../../assets/icons/icons-sprite.svg";


export default function PromoIcons(props) {

    const isPromoIcon = props.promoIcon;

    if(isPromoIcon){
        return (
            <svg className={s.icon}>
                <use href={sprite + `#i-promo-${props.promoIcon}`}/>
            </svg>
        )
    } else {
        return ''
    }

}

